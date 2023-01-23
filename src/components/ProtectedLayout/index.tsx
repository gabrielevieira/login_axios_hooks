import { useAuth } from "../../context/AuthProvider/useAuth"
import { Alert } from 'antd'

export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
    const auth = useAuth()

    if (!auth.email) {
        return (
            <Alert
                message="Warning"
                description="This is a warning notice about copywriting."
                type="warning"
                showIcon
                closable
            />
        )
    }

    return children;
}