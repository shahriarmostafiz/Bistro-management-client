import { useQuery } from "@tanstack/react-query";
import useAuth from "../useAuth/useAuth";
import useAxios from "../useAxios/useAxios";

const useAdmin = () => {
    const { user } = useAuth()
    const axiosSecure = useAxios()
    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: [user?.email, "isAdmin"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`)
            console.log(res.data);
            return res.data.admin
        }

    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;