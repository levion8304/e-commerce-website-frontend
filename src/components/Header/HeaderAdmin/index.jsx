import { memo } from "react";
import "./HeaderAdmin.scss";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function HeaderAdmin() {
  const navigate = useNavigate();
  const handleLogout = () => {
    Swal.fire({
      icon: "warning",
      title: "Cảnh báo",
      text: "Bạn có chắc chắn muốn đăng xuất?",
      showCancelButton: true,
    }).then((res) => {
      if (res.isConfirmed) {
        localStorage.removeItem("token"); 
        window.location.reload();
        navigate("/auth/login");
      }
    });
  };
  return (
    <>
      <div className="header-admin">
        <i
          className="fa-solid fa-arrow-right-from-bracket"
          onClick={handleLogout}
        ></i>
      </div>
    </>
  );
}

export default memo(HeaderAdmin);
