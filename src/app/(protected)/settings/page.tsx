import { auth, signOut } from "auth";

const SettingPage = async () => {
    const session = await auth();
    return (
        <>
            <div>
                <h1>Settings</h1>
                <p>User: {session?.user?.email}</p>
            </div>
            <form action={ async () => {
                "use server";
                await signOut();
            }}>
                <button type="submit">Sign Out</button>
            </form>
            </>
    );
};

export default SettingPage;