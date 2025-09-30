import { useEffect } from "react";

export default function Error(){
      useEffect(() => {
        document.title = "Not Found - Erro 404";
      }, []);

    return(
        <main>
            <h1>Ooops... Error 404</h1>
        </main>
    );
}