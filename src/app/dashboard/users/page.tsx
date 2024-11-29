import NavSearchBar from "@/components/NavSearchBar";
import ViewTable from "@/components/shared/dashboard/ViewTable";

function Users() {
  return (
    <div className="w-[97lvw] border">
      <NavSearchBar />
      <ViewTable />
    </div>
  );
}

export default Users;
