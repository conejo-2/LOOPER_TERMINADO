// Contenido actualizado de login.js
async function login(usuario, contrasena) {
    const emailFalso = usuario + "@looper.com";

    const { error } = await client.auth.signInWithPassword({
        email: emailFalso,
        password: contrasena
    });

    if (error) {
        return error.message;
    }

    // Redirigir directamente al juego en modo ranked
    window.location.href = "LOOPER_JUEGO.html?usuario=" + encodeURIComponent(usuario) + "&modo=ranked";
}