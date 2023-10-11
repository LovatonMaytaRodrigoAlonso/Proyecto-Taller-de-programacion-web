<?php

if (isset($_REQUEST["accion"])) {
    $accion = $_REQUEST["accion"];

    if ($accion == "add") {

        $nom = $_REQUEST["nombre"];
        $apeP = $_REQUEST["apeP"];
        $apeM = $_REQUEST["apeM"];
        $direccion = $_REQUEST["direccion"];
//        $tipoDoc = $_REQUEST["tipoDoc"];
        $numDoc = $_REQUEST["doc"];
        $fono = $_REQUEST["telefono"];
        $bien = $_REQUEST["bienes"];
        $importe = $_REQUEST["importe"];
        $comentario = $_REQUEST["comentario"];
        
        echo $nom." ".$apeP." ".$apeM." ".$direccion." ".
                $numDoc." ".$fono." ".$bien." ".$importe." ".$comentario;
        
        $foto = $_FILES["foto"];

        $nombreArchivo = $foto['name'];
        $tipoMIME = $foto['type'];
        $tamañoArchivo = $foto['size'];
        $nombreArchivoTemporal = $foto['tmp_name'];
        $errorSubida = $foto['error'];
       
        if ($errorSubida === UPLOAD_ERR_OK) {

            if ($tipoMIME === 'image/jpeg' || $tipoMIME === 'image/png') {

                $nombreArchivoDestino = 'evidencias/'; 

                 if (move_uploaded_file($nombreArchivoTemporal, $nombreArchivoDestino.$nombreArchivo)) {
                     echo "<script>alert('El archivo se ha cargado y movido correctamente.')</script>";
                     header('Location: exito.html');
                 } else {
                     echo "<script>alert('Hubo un error al cargar o mover el archivo.')</script>";
                 }

                
            } else {
                 echo "<script>alert('No es un archivo JPG ni PNG.')</script>";
            }
        } else {
             echo "<script>alert('Error al subir')</script>";
        }
    }
}