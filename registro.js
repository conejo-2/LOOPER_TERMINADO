async function registro(usuario, contrasena) {
    const emailFalso = usuario + "@looper.com";

    const { error } = await client.auth.signUp({
        email: emailFalso,
        password: contrasena
    });

    if (error) {
        return error.message;
    }

    // Insertar en tabla usuarios
    await client.from('usuarios').insert([{ usuario, contrasena }]);

    window.location.href = "LOOPER_LOGIN.html?success=¡Registro completo! Ya puedes iniciar sesión.";
}
