// get_record.js
async function getRecord(usuario) {
    try {
        if (!usuario) return null;

        const { data, error } = await client
            .from('ranking')
            .select('ranking')
            .eq('usuario', usuario)
            .order('ranking', { ascending: false })
            .limit(1)
            .maybeSingle();

        if (error || !data) {
            console.warn('getRecord: sin record o error', error);
            return null;
        }

        return Number(data.ranking) || 0;
    } catch (e) {
        console.error('getRecord excepción', e);
        return null;
    }
}
