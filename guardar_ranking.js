// guardar_ranking.js
async function guardarRanking(usuario, nuevoPuntaje) {
    try {
        if (!usuario) {
            console.warn('guardarRanking: usuario vacío. No se guardará.');
            return "no_user";
        }

        // Asegurar número válido
        nuevoPuntaje = Number(nuevoPuntaje) || 0;

        // Buscar el puntaje actual (si existe)
        const { data: existing, error: fetchError } = await client
            .from('ranking')
            .select('id_rank, ranking')
            .eq('usuario', usuario)
            .order('ranking', { ascending: false })
            .limit(1)
            .maybeSingle();   // <-- en lugar de .single()

        if (fetchError) {
            console.error("Error buscando ranking:", fetchError);
            return "error";
        }

        if (!existing) {
            // No existe → insertar
            const { data: insertData, error: insertError } = await client
                .from('ranking')
                .insert([{ usuario, ranking: nuevoPuntaje }])
                .select();

            if (insertError) {
                console.error('Error insertando ranking:', insertError);
                return "error";
            }
            console.log('Ranking insertado:', insertData);
            return "nuevo";
        } else if (nuevoPuntaje > Number(existing.ranking)) {
            // Existe → actualizar si es mejor récord
            const { data: updateData, error: updateError } = await client
                .from('ranking')
                .update({ ranking: nuevoPuntaje })
                .eq('id_rank', existing.id_rank)
                .select();

            if (updateError) {
                console.error('Error actualizando ranking:', updateError);
                return "error";
            }
            console.log('Ranking actualizado:', updateData);
            return "nuevo";
        } else {
            // No supera el récord
            return "no";
        }
    } catch (e) {
        console.error('guardarRanking excepción:', e);
        return "error";
    }
}
