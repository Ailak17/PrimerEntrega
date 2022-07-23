let nombreDeUsuario = usuario;
let contraseña = contraseña;

let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let info = e.target;
    if(info.children[0].value === nombreDeUsuario && info.children[1].value===contraseña){
        let info = document.createElement("h5");
        info.className = "informacion";
        info.innerHTML = "Iniciando Sesion"
        document.body.append(info)
    }else{
        let info = document.createElement("h5");
        info.className = "rojo";
        info.innerHTML = "Usuario o contraseña incorectos"
        document.body.append(info);
    }  
    });

