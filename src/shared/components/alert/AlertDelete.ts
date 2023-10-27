import Swal from "sweetalert2";

type SweetAlertType = {
    action: () => void;
};
const handleAlertDelete = async ({action}: SweetAlertType) => {
    const result = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    });

    if (result.isConfirmed) {
        action();
        Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
        );
    }
};

export const AlertDelete = {
    handleAlertDelete
}