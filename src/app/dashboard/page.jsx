import { auth } from "@/lib/auth";

import { headers } from "next/headers";
import { redirect } from "next/navigation";

const DashboardPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  console.log(session);

  const user = session?.user;
  if (!user) {
    redirect("/auth/signin");
    return (
      <div>
        <h3 className="text-3xl font-bold">
          Please sign in to access the dashboard
        </h3>
      </div>
    );
  }
  return (
    <div>
      <h3 className="text-3xl font-bold">Dashboard</h3>
    </div>
  );
};

export default DashboardPage;
