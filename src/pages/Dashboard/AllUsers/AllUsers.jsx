import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hooks/useAxios/useAxios";
import LoadingPhase from "../../../components/Loading/LoadingPhase";
import { FaTrash, FaTrashAlt, FaUser, FaUserAlt, FaUsers } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";

import "./allusers.css"
import Swal from "sweetalert2";
import { useState } from "react";

const AllUsers = () => {
    const axiosSecure = useAxios()
    const [userRole, setUserRole] = useState(false)
    const { data: users = [], isLoading, isError, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get("/users")
            return res.data
        }
    })
    if (isLoading) {
        return <LoadingPhase></LoadingPhase>
    }
    const handleDelete = id => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete User!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/users/delete/${id}`)
                    .then(() => {
                        refetch()
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    })

            }
        });
    }
    const handleRole = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Change Role!"
        }).then((result) => {
            if (result.isConfirmed) {
                // setUserRole(!userRole)

                const newRole = user?.role === "admin" ? "user" : "admin"
                const info = { role: newRole }
                // console.log(id);
                console.log(newRole);
                axiosSecure.patch(`/users/role/${user?._id}`, info)
                    .then((res) => {
                        if (res.data.modifiedCount) {
                            refetch()
                            // refetch()
                            Swal.fire({
                                title: "Update!",
                                text: "Role changed.",
                                icon: "success"
                            })
                        }
                    })



            }
        });
    }
    return (
        <div className="font-Manrope space-y-6">
            <h1 className="text-3xl font-semibold">
                Total Users:  {users?.length}

            </h1>
            <div className="overflow-x-auto  thr">
                <table className="table">
                    {/* head */}
                    <thead className="">


                        <tr className="thr text-white font-Manrope text-lg bg-amber-600 ">
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action </th>
                        </tr>

                    </thead>
                    <tbody>

                        {users?.map((user, idx) => <tr key={user._id}>
                            <th>{idx + 1}</th>
                            <td>{user?.name}</td>
                            <td>{user?.email}</td>
                            <td>
                                <button
                                    onClick={() => handleRole(user)}
                                    className="btn bg-amber-600 text-white outline-none hover:btn-warning">{
                                        user?.role === "admin" ? <MdAdminPanelSettings /> : <FaUserAlt />
                                    }</button>
                            </td>
                            <td>
                                {user?.role === "admin" ? "Admin" : <button
                                    onClick={() => handleDelete(user?._id)}
                                    className=" btn bg-red-600 text-white outline-none hover:btn-error "><FaTrashAlt />
                                </button>}
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllUsers;