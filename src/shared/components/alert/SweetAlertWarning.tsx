import Swal from "sweetalert2";

type SweetAlertType = {
    text: string;
    action: () => void;
};

export const SweetAlertWarning: React.FC<SweetAlertType> = ({ text,action }) => {
    const handleConfirm = async () => {
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

    return (
        <button onClick={handleConfirm}>
            {text}
        </button>
    );
};
