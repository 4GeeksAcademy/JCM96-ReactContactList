import { react } from "react";
const CardComponent = ()  => {
    return (
        <div className="row-1 p-3">
            <div className="row mx-3">
                <div className="col-4">imagen</div>
                <div className="col-4">
                    <h4>nombre del contact</h4>
                    <p>direccion</p>
                    <p>Numero</p>
                    <p>Correo</p>
                </div>
                <div className="col-4">
                    <i class="fa-solid fa-pencil col-auto px-5 text-end"></i>
                    <i class="fa-solid fa-trash col-auto px-3 text-end" ></i>
                </div>
            </div>
        </div>
    );
};
export default CardComponent;