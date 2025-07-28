import CardForm from "../components/CardForm"
export const AddContact = () => {
    return (
        <div className="text-center pb-5">
            <h1 className="text-center fw-bold">Add a new contact</h1>
            <i class="fa-solid fa-plus"></i>
                <CardForm/>
            <a href="#">Or get back to contacts</a>
        </div>
    );
}; 