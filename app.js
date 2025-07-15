document.addEventListener('DOMContentLoaded', () => {

    // --- 1. DATOS DE CLIENTES ---
    const clientes = [
        { "codigo": "8103539", "plan": "CAT21", "cadena": "Condis", "nombre": "De Catalunya, 24", "poblacion": "Aiguafreda", "medalla": "Plata", "diaVisita": "1J-2J-3J-4J" },
        { "codigo": "8105732", "plan": "CAT21", "cadena": "Condis", "nombre": "Crta. Granera, 41", "poblacion": "Castellterçol", "medalla": "Plata", "diaVisita": "1X-2X-3X-4X" },
        { "codigo": "8106896", "plan": "CAT21", "cadena": "Esclat", "nombre": "Crta. C-17, km 54,5", "poblacion": "Malla", "medalla": "Plata", "diaVisita": "1J-2J-3J-4J" },
        { "codigo": "8109293", "plan": "CAT21", "cadena": "Consum Charter", "nombre": "Enric Prat de la Riba, 9", "poblacion": "Torello", "medalla": "Plata", "diaVisita": "1M-2M-3M-4M" },
        { "codigo": "8109298", "plan": "CAT21", "cadena": "Esclat", "nombre": "Manlleu, 117", "poblacion": "Torello", "medalla": "Plata", "diaVisita": "1M-2M-3M-4M" },
        { "codigo": "8109748", "plan": "CAT21", "cadena": "Bon Preu", "nombre": "Arquebisbe Alemany, 20", "poblacion": "Vic", "medalla": "Plata", "diaVisita": "1M-2M-3M-4M" },
        { "codigo": "8109750", "plan": "CAT21", "cadena": "Bon Preu", "nombre": "Torello · Mare de Deu dels Munts", "poblacion": "Vic", "medalla": "Bronce", "diaVisita": "1L-3L" },
        { "codigo": "8109753", "plan": "CAT21", "cadena": "Supeco", "nombre": "Industria · Torello", "poblacion": "Vic", "medalla": "Oro Plus 2", "diaVisita": "1LV-2LV-3LV-4LV" },
        { "codigo": "8109754", "plan": "CAT21", "cadena": "CARREFOUR MINI", "nombre": "La Llotja, 6 - Urb. El Sucre", "poblacion": "Vic", "medalla": "Oro Plus 4", "diaVisita": "1LXV-2LXV-3LXV-4LXV" },
        { "codigo": "8109763", "plan": "CAT21", "cadena": "Consum", "nombre": "Josep Maria Sert, s/n", "poblacion": "Vic", "medalla": "Plata", "diaVisita": "1V-2V-3V-4V" },
        { "codigo": "8109766", "plan": "CAT21", "cadena": "Bon Preu", "nombre": "Psg. Generalitat, 44-46", "poblacion": "Vic", "medalla": "Plata", "diaVisita": "1L-2L-3L-4L" },
        { "codigo": "8109767", "plan": "CAT21", "cadena": "Esclat", "nombre": "Ripoll, 16", "poblacion": "Vic", "medalla": "Plata", "diaVisita": "1V-2V-3V-4V" },
        { "codigo": "8120832", "plan": "CAT21", "cadena": "CondisLife", "nombre": "C/Rector Tomas Vila, 27", "poblacion": "Sant Feliu de Codines", "medalla": "Plata", "diaVisita": "1X-2X-3X-4X" },
        { "codigo": "8121085", "plan": "CAT21", "cadena": "Condis", "nombre": "Carretera de Barcelona, 10", "poblacion": "Moia", "medalla": "Plata", "diaVisita": "1X-2X-3X-4X" },
        { "codigo": "8122213", "plan": "CAT21", "cadena": "CondisLife", "nombre": "C. Doctor Junyent, 2-5", "poblacion": "Vic", "medalla": "Bronce", "diaVisita": "2L-4L" },
        { "codigo": "8124947", "plan": "CAT21", "cadena": "Esclat", "nombre": "Ctra. de Roda s/n", "poblacion": "Manlleu", "medalla": "Plata", "diaVisita": "1M-2M-3M-4M" },
        { "codigo": "8134816", "plan": "CAT21", "cadena": "Coaliment Saludable", "nombre": "del Pare Gallissà  1-3", "poblacion": "Vic", "medalla": "Plata", "diaVisita": "1M-2M-3M-4M" },
        { "codigo": "8134942", "plan": "CAT21", "cadena": "Coaliment", "nombre": "Rambla Rambla de l’Hospital 17", "poblacion": "Vic", "medalla": "Plata", "diaVisita": "1J-2J-3J-4J" },
        { "codigo": "8105044", "plan": "CAT22", "cadena": "CondisLife", "nombre": "Pl. del Pi, s/n", "poblacion": "Bellaterra", "medalla": "Plata", "diaVisita": "1J-2J-3J-4J" },
        { "codigo": "8105762", "plan": "CAT22", "cadena": "Caprabo", "nombre": "Avda. Catalunya, 25", "poblacion": "Cerdanyola del Valles", "medalla": "Plata", "diaVisita": "1L-2L-3L-4L" },
        { "codigo": "8105763", "plan": "CAT22", "cadena": "Caprabo", "nombre": "Santa Marcelina, 9", "poblacion": "Cerdanyola del Valles", "medalla": "Plata", "diaVisita": "1L-2L-3L-4L" },
        { "codigo": "8105767", "plan": "CAT22", "cadena": "Condis", "nombre": "Can Pallares, s/n", "poblacion": "Cerdanyola del Valles", "medalla": "Plata", "diaVisita": "1L-2L-3L-4L" },
        { "codigo": "8105768", "plan": "CAT22", "cadena": "CondisLife", "nombre": "Avda. Canaletes, 11 local 2", "poblacion": "Cerdanyola del Valles", "medalla": "Plata", "diaVisita": "1L-2L-3L-4L" },
        { "codigo": "8105769", "plan": "CAT22", "cadena": "CondisLife", "nombre": "Avda. Catalunya, 66", "poblacion": "Cerdanyola del Valles", "medalla": "Plata", "diaVisita": "1L-2L-3L-4L" },
        { "codigo": "8105771", "plan": "CAT22", "cadena": "Condis", "nombre": "Santa Marcelina, 17", "poblacion": "Cerdanyola del Valles", "medalla": "Plata", "diaVisita": "1L-2L-3L-4L" },
        { "codigo": "8108192", "plan": "CAT22", "cadena": "Caprabo", "nombre": "Avda. Barbera, 238", "poblacion": "Sabadell", "medalla": "Plata", "diaVisita": "1X-2X-3X-4X" },
        { "codigo": "8108195", "plan": "CAT22", "cadena": "Caprabo", "nombre": "Rbl. Sabadell, 141", "poblacion": "Sabadell", "medalla": "Plata", "diaVisita": "1X-2X-3X-4X" },
        { "codigo": "8108196", "plan": "CAT22", "cadena": "Caprabo", "nombre": "Sol i Padris, 100", "poblacion": "Sabadell", "medalla": "Plata", "diaVisita": "1V-2V-3V-4V" },
        { "codigo": "8108207", "plan": "CAT22", "cadena": "CondisLife", "nombre": "Balmes, 29-31", "poblacion": "Sabadell", "medalla": "Bronce", "diaVisita": "1X-3X" },
        { "codigo": "8108209", "plan": "CAT22", "cadena": "Condis", "nombre": "Calders, 190 - 192", "poblacion": "Sabadell", "medalla": "Plata", "diaVisita": "1V-2V-3V-4V" },
        { "codigo": "8108211", "plan": "CAT22", "cadena": "Condis", "nombre": "Irlanda, 2 - Mdo. Merinals", "poblacion": "Sabadell", "medalla": "Plata", "diaVisita": "1V-2V-3V-4V" },
        { "codigo": "8108213", "plan": "CAT22", "cadena": "CondisLife", "nombre": "Les Valls, 26", "poblacion": "Sabadell", "medalla": "Plata", "diaVisita": "1X-2X-3X-4X" },
        { "codigo": "8108216", "plan": "CAT22", "cadena": "CondisLife", "nombre": "Ctra. Prats de Lluçanes, 180", "poblacion": "Sabadell", "medalla": "Plata", "diaVisita": "1X-2X-3X-4X" },
        { "codigo": "8108220", "plan": "CAT22", "cadena": "Consum Charter", "nombre": "Almogavers, 17", "poblacion": "Sabadell", "medalla": "Plata", "diaVisita": "1V-2V-3V-4V" },
        { "codigo": "8108263", "plan": "CAT22", "cadena": "Sorli Discau", "nombre": "Psg. Almogavers, 6", "poblacion": "Sabadell", "medalla": "Plata", "diaVisita": "1V-2V-3V-4V" },
        { "codigo": "8108265", "plan": "CAT22", "cadena": "Sorli Discau", "nombre": "Industria, 34", "poblacion": "Sabadell", "medalla": "Plata", "diaVisita": "1X-2X-3X-4X" },
        { "codigo": "8108266", "plan": "CAT22", "cadena": "Sorli Discau", "nombre": "Manso, 80", "poblacion": "Sabadell", "medalla": "Plata", "diaVisita": "1V-2V-3V-4V" },
        { "codigo": "8108502", "plan": "CAT22", "cadena": "Caprabo", "nombre": "Rbl. Celler Cooperatiu, 115", "poblacion": "Sant Cugat del Valles", "medalla": "Plata", "diaVisita": "1M-2M-3M-4M" },
        { "codigo": "8108503", "plan": "CAT22", "cadena": "Caprabo", "nombre": "Salvador Espriu · Pau IV", "poblacion": "Sant Cugat del Valles", "medalla": "Plata", "diaVisita": "1M-2M-3M-4M" },
        { "codigo": "8108508", "plan": "CAT22", "cadena": "Condis", "nombre": "Avda. Torreblanca, 2 - Mercado", "poblacion": "Sant Cugat del Valles", "medalla": "Plata", "diaVisita": "1M-2M-3M-4M" },
        { "codigo": "8108509", "plan": "CAT22", "cadena": "Consum", "nombre": "Avda. Rius i Taulet, 49", "poblacion": "Sant Cugat del Valles", "medalla": "Plata", "diaVisita": "1J-2J-3J-4J" },
        { "codigo": "8108513", "plan": "CAT22", "cadena": "Hermanos Valencia", "nombre": "Avda. Cerdanyola, 6", "poblacion": "Sant Cugat del Valles", "medalla": "Plata", "diaVisita": "1M-2M-3M-4M" },
        { "codigo": "8108522", "plan": "CAT22", "cadena": "Supercor Express", "nombre": "Lluis Domenech, 2 · Puig i Cadafalch 30", "poblacion": "Sant Cugat del Valles", "medalla": "Plata", "diaVisita": "1M-2M-3M-4M" },
        { "codigo": "8120749", "plan": "CAT22", "cadena": "Condis Express", "nombre": "Avda Cerdanyola, 35", "poblacion": "Sant Cugat del Valles", "medalla": "Bronce", "diaVisita": "1M-3M" },
        { "codigo": "8124231", "plan": "CAT22", "cadena": "Esclat", "nombre": "Via Augusta, 103", "poblacion": "Sant Cugat del Valles", "medalla": "Plata", "diaVisita": "1J-2J-3J-4J" },
        { "codigo": "8124323", "plan": "CAT22", "cadena": "Sorli Discau", "nombre": "S. Ramon Penyafort, 3", "poblacion": "Sabadell", "medalla": "Plata", "diaVisita": "1X-2X-3X-4X" },
        { "codigo": "8124892", "plan": "CAT22", "cadena": "Consum Charter", "nombre": "Pasaje de las Moreras, 1", "poblacion": "Sabadell", "medalla": "Plata", "diaVisita": "1X-2X-3X-4X" },
        { "codigo": "8134280", "plan": "CAT22", "cadena": "Condis Express", "nombre": "Plaza de Sant Pere, 5", "poblacion": "Sant Cugat del Valles", "medalla": "Bronce", "diaVisita": "1J-3J" },
        { "codigo": "8134282", "plan": "CAT22", "cadena": "Condis Express", "nombre": "Carrer de Vallseca, 130", "poblacion": "Sant Cugat del Valles", "medalla": "Bronce", "diaVisita": "2J-4J" },
        { "codigo": "8135101", "plan": "CAT22", "cadena": "Sorli Discau", "nombre": "CL Valldoreix, 38", "poblacion": "Sant Cugat del Valles", "medalla": "Plata", "diaVisita": "1J-2J-3J-4J" },
        { "codigo": "8135408", "plan": "CAT22", "cadena": "Caprabo", "nombre": "AV  Lluis Companys i Jover, 40", "poblacion": "Sant Cugat del Valles", "medalla": "Bronce", "diaVisita": "1J-3J" },
        { "codigo": "8138210", "plan": "CAT22", "cadena": "Sorli Discau", "nombre": "AV  CERDANYOLA, 8-10", "poblacion": "Sant Cugat del Valles", "medalla": "Plata", "diaVisita": "1M-2M-3M-4M" },
        { "codigo": "8138747", "plan": "CAT22", "cadena": "CondisLife", "nombre": "RO EUROPA 506", "poblacion": "Sabadell", "medalla": "Plata", "diaVisita": "1V-2V-3V-4V" },
        { "codigo": "8138878", "plan": "CAT22", "cadena": "Sorli Discau", "nombre": "CL Puig de la Rimila, 14-20", "poblacion": "Sant Cugat del Valles", "medalla": "Plata", "diaVisita": "1X-2X-3X-4X" },
        { "codigo": "8104054", "plan": "CAT23", "cadena": "Condis", "nombre": "Avda. Catalunya, 42", "poblacion": "Badalona", "medalla": "Bronce", "diaVisita": "1J-3J" },
        { "codigo": "8104059", "plan": "CAT23", "cadena": "Condis", "nombre": "Avda. Lloreda, 66-72", "poblacion": "Badalona", "medalla": "Bronce", "diaVisita": "1J-3J" },
        { "codigo": "8104102", "plan": "CAT23", "cadena": "Sorli Discau", "nombre": "Avda. Catalunya, 45-47 (Lloreda)", "poblacion": "Badalona", "medalla": "Bronce", "diaVisita": "1J-3J" },
        { "codigo": "8104105", "plan": "CAT23", "cadena": "Sorli Discau", "nombre": "Avda. Italia, 3-5", "poblacion": "Badalona", "medalla": "Bronce", "diaVisita": "1J-3J" },
        { "codigo": "8104158", "plan": "CAT23", "cadena": "Condis", "nombre": "Psg. Doctor Moragas, 234", "poblacion": "Barbera del Valles", "medalla": "Plata", "diaVisita": "1V-2V-3V-4V" },
        { "codigo": "8104165", "plan": "CAT23", "cadena": "MI ALCAMPO", "nombre": "Josep Armengol, 15", "poblacion": "Barbera del Valles", "medalla": "Plata", "diaVisita": "1V-2V-3V-4V" },
        { "codigo": "8107213", "plan": "CAT23", "cadena": "CondisLife", "nombre": "Lleida, 27", "poblacion": "Montcada i Reixac", "medalla": "Plata", "diaVisita": "1M-2M-3M-4M" },
        { "codigo": "8107214", "plan": "CAT23", "cadena": "Condis", "nombre": "Montiu, 12", "poblacion": "Montcada i Reixac", "medalla": "Bronce", "diaVisita": "1M-3M" },
        { "codigo": "8107219", "plan": "CAT23", "cadena": "Gross Mercat", "nombre": "Pol. Ind. La Ferreria (Avda. La Ferreria)", "poblacion": "Montcada i Reixac", "medalla": "Plata", "diaVisita": "1M-2M-3M-4M" },
        { "codigo": "8108090", "plan": "CAT23", "cadena": "Condis", "nombre": "Rbl. de Sant Jordi, 113", "poblacion": "Ripollet", "medalla": "Plata", "diaVisita": "1M-2M-3M-4M" },
        { "codigo": "8108101", "plan": "CAT23", "cadena": "Sorli Discau", "nombre": "Nuestra Sra. dels Angels, 12", "poblacion": "Ripollet", "medalla": "Plata", "diaVisita": "1M-2M-3M-4M" },
        { "codigo": "8108748", "plan": "CAT23", "cadena": "Caprabo", "nombre": "Avda. Generalitat, 44 - 46", "poblacion": "Santa Coloma de Gramanet", "medalla": "Bronce", "diaVisita": "2J-4J" },
        { "codigo": "8108749", "plan": "CAT23", "cadena": "Carrefour Market", "nombre": "Avda. Santa Coloma, 24-26", "poblacion": "Santa Coloma de Gramanet", "medalla": "Oro Plus 3", "diaVisita": "1LXV-2LXV-3LXV-4LXV" },
        { "codigo": "8108750", "plan": "CAT23", "cadena": "Carrefour Market", "nombre": "Rbl. de Sant Sebastia, 78-80", "poblacion": "Santa Coloma de Gramanet", "medalla": "Oro Plus 3", "diaVisita": "1LXV-2LXV-3LXV-4LXV" },
        { "codigo": "8108760", "plan": "CAT23", "cadena": "Condis", "nombre": "Avda. Pallaresa, 92", "poblacion": "Santa Coloma de Gramanet", "medalla": "Bronce", "diaVisita": "2L-4L" },
        { "codigo": "8108761", "plan": "CAT23", "cadena": "Condis", "nombre": "Peru, 39", "poblacion": "Santa Coloma de Gramanet", "medalla": "Plata", "diaVisita": "1V-2V-3V-4V" },
        { "codigo": "8108762", "plan": "CAT23", "cadena": "Condis", "nombre": "Avda. Francesc Macia, 144-146", "poblacion": "Santa Coloma de Gramanet", "medalla": "Plata", "diaVisita": "1X-2X-3X-4X" },
        { "codigo": "8108763", "plan": "CAT23", "cadena": "Condis", "nombre": "Psg. Lorenzo Serra, 45", "poblacion": "Santa Coloma de Gramanet", "medalla": "Plata", "diaVisita": "1L-2L-3L-4L" },
        { "codigo": "8108764", "plan": "CAT23", "cadena": "Condis", "nombre": "Mossen Cinto Verdaguer, 91", "poblacion": "Santa Coloma de Gramanet", "medalla": "Plata", "diaVisita": "1J-2J-3J-4J" },
        { "codigo": "8108765", "plan": "CAT23", "cadena": "Condis", "nombre": "Mossen Cinto Verdaguer, 38", "poblacion": "Santa Coloma de Gramanet", "medalla": "Bronce", "diaVisita": "2J-4J" },
        { "codigo": "8108767", "plan": "CAT23", "cadena": "Consum Basic", "nombre": "Mercat de Singuerlin / Avda. Puig Castellar, s/n", "poblacion": "Santa Coloma de Gramanet", "medalla": "Plata", "diaVisita": "1X-2X-3X-4X" },
        { "codigo": "8108784", "plan": "CAT23", "cadena": "Sorli Discau", "nombre": "Major, 57 - 59", "poblacion": "Santa Coloma de Gramanet", "medalla": "Plata", "diaVisita": "1L-2L-3L-4L" },
        { "codigo": "8120481", "plan": "CAT23", "cadena": "Condis", "nombre": "Avda. Catalunya, 21", "poblacion": "Ripollet", "medalla": "Plata", "diaVisita": "1M-2M-3M-4M" },
        { "codigo": "8123068", "plan": "CAT23", "cadena": "Consum Charter", "nombre": "Av Generalitat 23", "poblacion": "Santa Coloma de Gramanet", "medalla": "Bronce", "diaVisita": "2X-4X" },
        { "codigo": "8124713", "plan": "CAT23", "cadena": "Condis", "nombre": "Carrer Mossen Camil Rosell, 59", "poblacion": "Santa Coloma de Gramanet", "medalla": "Bronce", "diaVisita": "2J-4J" },
        { "codigo": "8134941", "plan": "CAT23", "cadena": "Carrefour Express", "nombre": "Rambla Rambla de Sant Jordi 7", "poblacion": "Ripollet", "medalla": "Plata", "diaVisita": "1M-2M-3M-4M" },
        { "codigo": "8105203", "plan": "CAT24", "cadena": "CondisLife", "nombre": "Avda. Prat de la Riba, 122", "poblacion": "Bigues i Riells", "medalla": "Plata", "diaVisita": "1L-2L-3L-4L" },
        { "codigo": "8105349", "plan": "CAT24", "cadena": "Caprabo", "nombre": "Pi i Maragall, 183", "poblacion": "Caldes de Montbui", "medalla": "Plata", "diaVisita": "1X-2X-3X-4X" },
        { "codigo": "8105352", "plan": "CAT24", "cadena": "Coaliment Saludable", "nombre": "Avinguda Montserrat, 21", "poblacion": "Caldes de Montbui", "medalla": "Bronce", "diaVisita": "2X-4X" },
        { "codigo": "8105560", "plan": "CAT24", "cadena": "Carrefour Market", "nombre": "Ctra. Granollers a Sant Celoni · F. Mistral", "poblacion": "Cardedeu", "medalla": "Oro Plus 3", "diaVisita": "1LXV-2LXV-3LXV-4LXV" },
        { "codigo": "8105562", "plan": "CAT24", "cadena": "Consum", "nombre": "Pl. Joan Alsina, 24", "poblacion": "Cardedeu", "medalla": "Plata", "diaVisita": "1L-2L-3L-4L" },
        { "codigo": "8105566", "plan": "CAT24", "cadena": "Sorli Discau", "nombre": "Balmes, 55", "poblacion": "Cardedeu", "medalla": "Plata", "diaVisita": "1L-2L-3L-4L" },
        { "codigo": "8106808", "plan": "CAT24", "cadena": "CondisLife", "nombre": "Avda. Pau Casals, 82-84", "poblacion": "Llinars del Valles", "medalla": "Plata", "diaVisita": "1L-2L-3L-4L" },
        { "codigo": "8107162", "plan": "CAT24", "cadena": "Caprabo", "nombre": "Avda. Rabassaires, s/n", "poblacion": "Mollet del Valles", "medalla": "Plata", "diaVisita": "1M-2M-3M-4M" },
        { "codigo": "8107170", "plan": "CAT24", "cadena": "Esclat", "nombre": "Nicaragua, s/n (Can Borrell)", "poblacion": "Mollet del Valles", "medalla": "Plata", "diaVisita": "1M-2M-3M-4M" },
        { "codigo": "8107241", "plan": "CAT24", "cadena": "Sorli Discau", "nombre": "Federico Garcia Lorca, 7", "poblacion": "Montmelo", "medalla": "Plata", "diaVisita": "1V-2V-3V-4V" },
        { "codigo": "8107243", "plan": "CAT24", "cadena": "Caprabo", "nombre": "Estrella, 5", "poblacion": "Montornes del Valles", "medalla": "Plata", "diaVisita": "1J-2J-3J-4J" },
        { "codigo": "8107250", "plan": "CAT24", "cadena": "Sorli Discau", "nombre": "Major, 54", "poblacion": "Montornes del Valles", "medalla": "Plata", "diaVisita": "1J-2J-3J-4J" },
        { "codigo": "8108424", "plan": "CAT24", "cadena": "Condis", "nombre": "Avda. Alfons I, 5-7", "poblacion": "Sant Antoni de Vilamajor", "medalla": "Plata", "diaVisita": "1L-2L-3L-4L" },
        { "codigo": "8108495", "plan": "CAT24", "cadena": "Condis", "nombre": "Psg. dels Esports, 8", "poblacion": "Sant Celoni", "medalla": "Plata", "diaVisita": "1V-2V-3V-4V" },
        { "codigo": "8108497", "plan": "CAT24", "cadena": "Esclat", "nombre": "Crta. C-251 · Industria", "poblacion": "Sant Celoni", "medalla": "Plata", "diaVisita": "1V-2V-3V-4V" },
        { "codigo": "8108857", "plan": "CAT24", "cadena": "Caprabo", "nombre": "Cami Vell de Sant Celoni, 13 - 33", "poblacion": "Santa Maria de Palautordera", "medalla": "Plata", "diaVisita": "1X-2X-3X-4X" },
        { "codigo": "8108859", "plan": "CAT24", "cadena": "Condis", "nombre": "Rbl. dels Paisos Catalans, P C1, 3-5-7", "poblacion": "Santa Maria de Palautordera", "medalla": "Bronce", "diaVisita": "1X-3X" },
        { "codigo": "8108868", "plan": "CAT24", "cadena": "Bon Preu", "nombre": "Casal dels Mogoda, 40", "poblacion": "Santa Perpetua de la Mogoda", "medalla": "Plata", "diaVisita": "1J-2J-3J-4J" },
        { "codigo": "8108869", "plan": "CAT24", "cadena": "Supeco", "nombre": "Avda. Girona, s/n", "poblacion": "Santa Perpetua de la Mogoda", "medalla": "Oro Plus 2", "diaVisita": "1MJ-2MJ-3MJ-4MJ" },
        { "codigo": "8108871", "plan": "CAT24", "cadena": "CondisLife", "nombre": "Psg. de la Florida, 22", "poblacion": "Santa Perpetua de la Mogoda", "medalla": "Plata", "diaVisita": "1J-2J-3J-4J" },
        { "codigo": "8108874", "plan": "CAT24", "cadena": "Esclat", "nombre": "Avda. de Tres, 64", "poblacion": "Santa Perpetua de la Mogoda", "medalla": "Plata", "diaVisita": "1J-2J-3J-4J" },
        { "codigo": "8109859", "plan": "CAT24", "cadena": "Sorli Discau", "nombre": "Paissos Catalans, s/n", "poblacion": "Vilanova del Valles", "medalla": "Plata", "diaVisita": "1V-2V-3V-4V" },
        { "codigo": "8120731", "plan": "CAT24", "cadena": "CondisLife", "nombre": "Jaume I, 67", "poblacion": "Sant Celoni", "medalla": "Plata", "diaVisita": "1X-2X-3X-4X" },
        { "codigo": "8124284", "plan": "CAT24", "cadena": "CondisLife", "nombre": "Can Pantiquet, 38", "poblacion": "Mollet del Valles", "medalla": "Plata", "diaVisita": "1M-2M-3M-4M" },
        { "codigo": "8133630", "plan": "CAT24", "cadena": "Condis", "nombre": "C/ Rafael Casanovas 59", "poblacion": "Mollet del Valles", "medalla": "Plata", "diaVisita": "1M-2M-3M-4M" },
        { "codigo": "8134283", "plan": "CAT24", "cadena": "Condis Express", "nombre": "Carrer Mare de Deu del Pilar, 49", "poblacion": "Cardedeu", "medalla": "Bronce", "diaVisita": "2X-4X" },
        { "codigo": "8131135", "plan": "CAT24", "cadena": "Coviran", "nombre": "CL RAMBLA 1", "poblacion": "Santa Perpetua de la Mogoda", "medalla": "Plata", "diaVisita": "1M-2M-3M-4M" },
        { "codigo": "8103930", "plan": "CAT25", "cadena": "CARREFOUR MINI", "nombre": "Crta. C-17, km 27 C.C. Sant Jordi", "poblacion": "L'Ametlla del Valles", "medalla": "Oro Plus 6", "diaVisita": "1LMXJVS-2LMXJVS-3LMXJVS-4LMXJVS" },
        { "codigo": "8105606", "plan": "CAT25", "cadena": "Consum", "nombre": "Portugal, s/n", "poblacion": "Castellar del Valles", "medalla": "Bronce", "diaVisita": "1J-3J" },
        { "codigo": "8106262", "plan": "CAT25", "cadena": "Caprabo", "nombre": "Caprabo", "poblacion": "Les Franqueses del Valles", "medalla": "Plata", "diaVisita": "1M-2M-3M-4M" },
        { "codigo": "8106312", "plan": "CAT25", "cadena": "Caprabo", "nombre": "Avda. Jacinto Verdaguer, 1", "poblacion": "La Garriga", "medalla": "Plata", "diaVisita": "1M-2M-3M-4M" },
        { "codigo": "8106797", "plan": "CAT25", "cadena": "Condis", "nombre": "Anselmo Clave, 143", "poblacion": "Lliça d'Amunt", "medalla": "Plata", "diaVisita": "1L-2L-3L-4L" },
        { "codigo": "8106798", "plan": "CAT25", "cadena": "Condis", "nombre": "Can Salgot, 2-4", "poblacion": "Lliça d'Amunt", "medalla": "Plata", "diaVisita": "1M-2M-3M-4M" },
        { "codigo": "8106803", "plan": "CAT25", "cadena": "Sorli Discau", "nombre": "Matarranya, s/n", "poblacion": "Lliça d'Amunt", "medalla": "Plata", "diaVisita": "1L-2L-3L-4L" },
        { "codigo": "8106806", "plan": "CAT25", "cadena": "CondisLife", "nombre": "Avda. Catalunya, 8", "poblacion": "Lliça de Vall", "medalla": "Plata", "diaVisita": "1V-2V-3V-4V" },
        { "codigo": "8107164", "plan": "CAT25", "cadena": "CondisLife", "nombre": "Caieta Vincia, 3 - 5", "poblacion": "Mollet del Valles", "medalla": "Bronce", "diaVisita": "2J-4J" },
        { "codigo": "8107177", "plan": "CAT25", "cadena": "Sorli Discau", "nombre": "Agricultura, 4 - 8", "poblacion": "Mollet del Valles", "medalla": "Plata", "diaVisita": "1J-2J-3J-4J" },
        { "codigo": "8107531", "plan": "CAT25", "cadena": "Caprabo", "nombre": "Avda. Catalunya, s/n", "poblacion": "Palau-solita i Plegamans", "medalla": "Plata", "diaVisita": "1X-2X-3X-4X" },
        { "codigo": "8107699", "plan": "CAT25", "cadena": "Dusa", "nombre": "Avda. Pedra del Diable, 28", "poblacion": "Parets del Valles", "medalla": "Plata", "diaVisita": "1V-2V-3V-4V" },
        { "codigo": "8107700", "plan": "CAT25", "cadena": "Dusa", "nombre": "Raval, 2", "poblacion": "Parets del Valles", "medalla": "Plata", "diaVisita": "1V-2V-3V-4V" },
        { "codigo": "8107703", "plan": "CAT25", "cadena": "Sorli Discau", "nombre": "Pau Casals, 16", "poblacion": "Parets del Valles", "medalla": "Plata", "diaVisita": "1V-2V-3V-4V" },
        { "codigo": "8107852", "plan": "CAT25", "cadena": "Condis", "nombre": "Rbl. de Polinya, 11-13", "poblacion": "Polinya", "medalla": "Plata", "diaVisita": "1L-2L-3L-4L" },
        { "codigo": "8108960", "plan": "CAT25", "cadena": "Caprabo", "nombre": "Psg. de la Torre Roja, 6", "poblacion": "Sentmenat", "medalla": "Plata", "diaVisita": "1X-2X-3X-4X" },
        { "codigo": "8120735", "plan": "CAT25", "cadena": "Consum", "nombre": "C/Rambla Nova 65", "poblacion": "Mollet del Valles", "medalla": "Bronce", "diaVisita": "1J-3J" },
        { "codigo": "8122681", "plan": "CAT25", "cadena": "Esclat", "nombre": "Avda. Paisos Catalans, 17", "poblacion": "Lliça d'Amunt", "medalla": "Plata", "diaVisita": "1M-2M-3M-4M" },
        { "codigo": "8133455", "plan": "CAT25", "cadena": "Supeco", "nombre": "Carrer d´Itàlia, 17", "poblacion": "Castellar del Valles", "medalla": "Plata", "diaVisita": "1X-2X-3X-4X" },
        { "codigo": "8133674", "plan": "CAT25", "cadena": "Condis", "nombre": "Monistrol 1", "poblacion": "Parets del Valles", "medalla": "Plata", "diaVisita": "1V-2V-3V-4V" },
        { "codigo": "8133631", "plan": "CAT25", "cadena": "MI ALCAMPO", "nombre": "C/ Gaieta Ventallo 116", "poblacion": "Mollet del Valles", "medalla": "Plata", "diaVisita": "1J-2J-3J-4J" },
        { "codigo": "8135060", "plan": "CAT25", "cadena": "Consum", "nombre": "PZ DEL MERCA S/N", "poblacion": "Castellar del Valles", "medalla": "Bronce", "diaVisita": "2J-4J" },
        { "codigo": "8104156", "plan": "PlatinoC4", "cadena": "Carrefour", "nombre": "Ctra. Barcelona, km. 6,7 - C.C. Baricentro", "poblacion": "Barbera del Valles", "medalla": "Platino", "diaVisita": "1LMXJVS-2LMXJVS-3LMXJVS-4LMXJVS" },
        { "codigo": "8108697", "plan": "PlatinoC4", "cadena": "Alcampo", "nombre": "Autopista C-58 km 12,2", "poblacion": "Sant Quirze del Valles", "medalla": "Platino", "diaVisita": "1LMXJVS-2LMXJVS-3LMXJVS-4LMXJVS" },
        { "codigo": "8123894", "plan": "PlatinoC4", "cadena": "Carrefour", "nombre": "Avda. Via Augusta, 2", "poblacion": "Sant Cugat del Valles", "medalla": "Platino", "diaVisita": "1LMXJVS-2LMXJVS-3LMXJVS-4LMXJVS" }
    ];

    // --- 2. REFERENCIAS A ELEMENTOS DEL DOM ---
    const mainTitle = document.getElementById('main-title');
    const toggleViewBtn = document.getElementById('toggle-view-btn');
    const filterView = document.getElementById('filter-view');
    const dailyRoutesView = document.getElementById('daily-routes-view');
    const searchBox = document.getElementById('search-box');
    const rutaFilter = document.getElementById('ruta-filter');
    const cadenaFilter = document.getElementById('cadena-filter');
    const medallaFilter = document.getElementById('medalla-filter');
    const sortSelect = document.getElementById('sort-select');
    const resetBtn = document.getElementById('reset-btn');
    const clientList = document.getElementById('client-list');
    const noResults = document.getElementById('no-results');
    const clientCount = document.getElementById('client-count');
    const diasFilterContainer = document.getElementById('dias-filter-container');
    const exportPdfBtn = document.getElementById('export-pdf-btn');
    const exportExcelBtn = document.getElementById('export-excel-btn');
    const copySelectionBtn = document.getElementById('copy-selection-btn');
    const previewSelectionBtn = document.getElementById('preview-selection-btn');
    const themeToggle = document.getElementById('theme-toggle');
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    const selectAllCheckbox = document.getElementById('select-all-checkbox');
    const previewModal = document.getElementById('preview-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const modalClientList = document.getElementById('modal-client-list');
    const modalClientCount = document.getElementById('modal-client-count');
    const diasNav = document.getElementById('dias-nav');
    const searchResultInfo = document.getElementById('search-result-info');
    const createMapBtn = document.getElementById('create-map-btn');

    // Referencias para la vista diaria
    const clientCountDaily = document.getElementById('client-count-daily');
    const exportExcelDayBtn = document.getElementById('export-excel-day-btn');
    const actionsBarDaily = document.getElementById('actions-bar-daily');

    // --- 3. ESTADO DE LA APLICACIÓN ---
    const selectedClients = new Set();
    let currentFilteredClients = [];
    let activeDayFilter = null;
    let currentView = 'filters';
    let currentDailyClients = [];
    let activeDay = 'Lunes';

    // --- 4. FUNCIONES AUXILIARES ---

    function getCleanAddressForMap(cliente) {
        let address = cliente.nombre;
    
        if (address.includes('·')) {
            address = address.split('·')[1];
        }
    
        address = address.split(' - ')[0];
        address = address.replace(/\s*\(.*\)/, '');
        
        return `${address.trim()}, ${cliente.poblacion}`;
    }

    // --- 5. LÓGICA DE CAMBIO DE VISTA ---
    function setView(viewName) {
        currentView = viewName;
        if (viewName === 'filters') {
            mainTitle.textContent = 'Rutas zona Franklin';
            toggleViewBtn.textContent = 'Ver Rutas Diarias';
            filterView.classList.remove('hidden');
            dailyRoutesView.classList.add('hidden');
        } else {
            mainTitle.textContent = 'Planificación Diaria';
            toggleViewBtn.textContent = '‹ Volver al Filtro';
            filterView.classList.add('hidden');
            dailyRoutesView.classList.remove('hidden');
            initializeDailyRoutes();
        }
    }

    // --- 6. LÓGICA PARA VISTA DE RUTAS DIARIAS ---
    function initializeDailyRoutes() {
        const diasSemana = { 'L': 'Lunes', 'M': 'Martes', 'X': 'Miércoles', 'J': 'Jueves', 'V': 'Viernes', 'S': 'Sábado' };
        const rutasPorDia = {};
        Object.values(diasSemana).forEach(n => { rutasPorDia[n] = {}; });

        clientes.forEach(cliente => {
            const diasUnicos = [...new Set(cliente.diaVisita.match(/[LMXJVS]/g) || [])];
            diasUnicos.forEach(diaLetra => {
                const nombreDia = diasSemana[diaLetra];
                if (nombreDia) {
                    if (!rutasPorDia[nombreDia][cliente.plan]) {
                        rutasPorDia[nombreDia][cliente.plan] = [];
                    }
                    rutasPorDia[nombreDia][cliente.plan].push(cliente);
                }
            });
        });

        if (diasNav.children.length === 0) {
            Object.values(diasSemana).forEach(nombreDia => {
                const btn = document.createElement('button');
                btn.className = 'dia-nav-btn';
                btn.textContent = nombreDia;
                btn.dataset.dia = nombreDia;
                diasNav.appendChild(btn);
            });
        }
        
        const rutasContent = document.getElementById('rutas-content');
        const dayCarouselBtnLeft = document.getElementById('day-carousel-btn-left');
        const dayCarouselBtnRight = document.getElementById('day-carousel-btn-right');
        const routeCardCarouselWrapper = document.getElementById('route-card-carousel-wrapper');
        const routeCardBtnLeft = document.getElementById('route-card-btn-left');
        const routeCardBtnRight = document.getElementById('route-card-btn-right');

        function updateRouteCarouselButtons() {
            if (!rutasContent || !routeCardBtnLeft || !routeCardBtnRight) return;
            const scrollLeft = Math.round(rutasContent.scrollLeft);
            const maxScrollLeft = rutasContent.scrollWidth - rutasContent.clientWidth;
            routeCardBtnLeft.disabled = scrollLeft <= 1;
            routeCardBtnRight.disabled = scrollLeft >= maxScrollLeft - 1;
        }

        function mostrarRutasDelDia(nombreDia) {
            activeDay = nombreDia;
            diasNav.querySelectorAll('.dia-nav-btn').forEach(b => b.classList.toggle('active', b.dataset.dia === nombreDia));
            rutasContent.innerHTML = '';
            currentDailyClients = [];

            const rutasDelDia = rutasPorDia[nombreDia];
            const planesOrdenados = Object.keys(rutasDelDia).sort();

            if (planesOrdenados.length === 0) {
                rutasContent.innerHTML = '<p class="no-rutas">🏖️ No hay rutas asignadas para este día.</p>';
                if (routeCardCarouselWrapper) routeCardCarouselWrapper.classList.add('hidden');
                actionsBarDaily.classList.add('hidden');
                return;
            }
            if(routeCardCarouselWrapper) routeCardCarouselWrapper.classList.remove('hidden');
            actionsBarDaily.classList.remove('hidden');
            
            planesOrdenados.forEach(plan => {
                const clientesDelPlan = rutasDelDia[plan];
                currentDailyClients.push(...clientesDelPlan);
                
                const rutaCard = document.createElement('div');
                rutaCard.className = 'ruta-card';
                const cardTitle = document.createElement('h3');
                cardTitle.textContent = `Ruta: ${plan}`;
                rutaCard.appendChild(cardTitle);
                const clientListUl = document.createElement('ul');
                clientesDelPlan.sort((a,b) => a.codigo.localeCompare(b.codigo)).forEach(cliente => {
                    const clientLi = document.createElement('li');
                    const medallaClass = (cliente.medalla || 'default').toLowerCase().replace(/\s/g, '-');
                    clientLi.innerHTML = `
                        <span class="client-code">${cliente.codigo}</span>
                        <div class="client-details"><strong>${cliente.cadena}</strong> - ${cliente.nombre}, <em>${cliente.poblacion}</em></div>
                        <span class="client-medalla medalla-${medallaClass}">${cliente.medalla}</span>
                    `;
                    clientListUl.appendChild(clientLi);
                });
                rutaCard.appendChild(clientListUl);
                rutasContent.appendChild(rutaCard);
            });
            
            clientCountDaily.textContent = `${currentDailyClients.length} clientes en el plan de hoy.`;
            setTimeout(updateRouteCarouselButtons, 100);
        }
        
        function updateDayCarouselButtons() {
            if (!dayCarouselBtnLeft || !dayCarouselBtnRight) return;
            const scrollLeft = Math.round(diasNav.scrollLeft);
            const maxScrollLeft = diasNav.scrollWidth - diasNav.clientWidth;
            dayCarouselBtnLeft.disabled = scrollLeft <= 1;
            dayCarouselBtnRight.disabled = scrollLeft >= maxScrollLeft - 1;
        }

        if(dayCarouselBtnLeft) dayCarouselBtnLeft.addEventListener('click', () => { diasNav.scrollBy({ left: -250, behavior: 'smooth' }); });
        if(dayCarouselBtnRight) dayCarouselBtnRight.addEventListener('click', () => { diasNav.scrollBy({ left: 250, behavior: 'smooth' }); });
        
        let dayScrollTimeout;
        if(diasNav) diasNav.addEventListener('scroll', () => {
            clearTimeout(dayScrollTimeout);
            dayScrollTimeout = setTimeout(updateDayCarouselButtons, 150);
        });
        
        if(routeCardBtnLeft) routeCardBtnLeft.addEventListener('click', () => {
            const cardWidth = rutasContent.querySelector('.ruta-card')?.offsetWidth || 300;
            rutasContent.scrollBy({ left: -(cardWidth + 15), behavior: 'smooth' });
        });
        if(routeCardBtnRight) routeCardBtnRight.addEventListener('click', () => {
            const cardWidth = rutasContent.querySelector('.ruta-card')?.offsetWidth || 300;
            rutasContent.scrollBy({ left: cardWidth + 15, behavior: 'smooth' });
        });
        
        let routeScrollTimeout;
        if(rutasContent) rutasContent.addEventListener('scroll', () => {
            clearTimeout(routeScrollTimeout);
            routeScrollTimeout = setTimeout(updateRouteCarouselButtons, 150);
        });

        if(diasNav) diasNav.addEventListener('click', e => {
            if (e.target.classList.contains('dia-nav-btn')) {
                mostrarRutasDelDia(e.target.dataset.dia);
            }
        });

        mostrarRutasDelDia('Lunes');
        setTimeout(updateDayCarouselButtons, 100);
    }
    
    // --- 7. LÓGICA PARA VISTA DE FILTROS ---
    const applyTheme = (theme) => {
        document.body.classList.toggle('dark-mode', theme === 'dark');
        if (themeToggle) {
            themeToggle.querySelector('.sun').style.display = theme === 'dark' ? 'none' : 'block';
            themeToggle.querySelector('.moon').style.display = theme === 'dark' ? 'block' : 'none';
        }
    };
    
    function openPreviewModal() {
        if (selectedClients.size === 0) return;
        const clientsToShow = clientes.filter(c => selectedClients.has(c.codigo));
        modalClientList.innerHTML = '';
        clientsToShow.forEach(cliente => {
            const clientElement = document.createElement('p');
            clientElement.textContent = `${cliente.codigo} ${cliente.cadena} (${cliente.medalla}) - ${cliente.nombre}, ${cliente.poblacion}`;
            modalClientList.appendChild(clientElement);
        });
        modalClientCount.textContent = `Total: ${clientsToShow.length} clientes seleccionados`;
        previewModal.classList.remove('hidden');
    }

    function closePreviewModal() {
        previewModal.classList.add('hidden');
    }

    function mostrarClientes(clientesAMostrar) {
        clientList.innerHTML = '';
        noResults.classList.toggle('hidden', clientesAMostrar.length > 0);
        clientesAMostrar.forEach(cliente => {
            const isSelected = selectedClients.has(cliente.codigo);
            const line = document.createElement('div');
            line.className = 'client-line';
            line.classList.toggle('selected', isSelected);
    
            const cleanAddress = getCleanAddressForMap(cliente);
            const encodedAddress = encodeURIComponent(`${cleanAddress}, Spain`);
            const mapsUrl = `https://www.google.com/maps/search/?api=1&query=$${encodedAddress}`;
    
            const medallaClass = (cliente.medalla || 'default').toLowerCase().replace(/\s/g, '-');
            
            line.innerHTML = `
                <label class="checkbox-container" for="check-${cliente.codigo}">
                    <input type="checkbox" id="check-${cliente.codigo}" data-codigo="${cliente.codigo}" ${isSelected ? 'checked' : ''}>
                </label>
                <a href="${mapsUrl}" target="_blank" class="client-info-link" title="Ver en Google Maps: ${cleanAddress}">
                    <div class="client-info">
                        <strong>${cliente.cadena} (${cliente.codigo})</strong>
                        <span class="client-address">${cliente.nombre}, ${cliente.poblacion}</span>
                    </div>
                </a>
                <span class="client-medalla medalla-${medallaClass}">${cliente.medalla}</span>
            `;
    
            const checkboxContainer = line.querySelector('.checkbox-container');
            if(checkboxContainer) {
                checkboxContainer.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const checkbox = line.querySelector('input[type="checkbox"]');
                    const codigo = checkbox.dataset.codigo;
                    if (e.target.nodeName !== 'INPUT') {
                        checkbox.checked = !checkbox.checked;
                    }
                    checkbox.checked ? selectedClients.add(codigo) : selectedClients.delete(codigo);
                    line.classList.toggle('selected', checkbox.checked);
                    updateSelectionUI();
                });
            }

            line.addEventListener('click', (e) => {
                if (e.target.closest('.client-info-link') || e.target.closest('.checkbox-container')) {
                    return;
                }
                const checkbox = line.querySelector('input[type="checkbox"]');
                checkbox.checked = !checkbox.checked;
                const codigo = checkbox.dataset.codigo;
                checkbox.checked ? selectedClients.add(codigo) : selectedClients.delete(codigo);
                line.classList.toggle('selected', checkbox.checked);
                updateSelectionUI();
            });
    
            clientList.appendChild(line);
        });
        currentFilteredClients = clientesAMostrar;
        updateSelectionUI();
    }

    function updateSelectionUI() {
        const selectedCount = selectedClients.size;
        clientCount.textContent = `(${selectedCount} sel.) | Mostrando ${currentFilteredClients.length} de ${clientes.length}`;
        const hasSelection = selectedCount > 0;
        
        [previewSelectionBtn, exportPdfBtn, exportExcelBtn, copySelectionBtn, createMapBtn].forEach(btn => {
            if (btn) btn.disabled = !hasSelection;
        });

        if (currentFilteredClients.length > 0) {
            const allVisibleSelected = currentFilteredClients.every(c => selectedClients.has(c.codigo));
            selectAllCheckbox.checked = allVisibleSelected;
            selectAllCheckbox.indeterminate = !allVisibleSelected && currentFilteredClients.some(c => selectedClients.has(c.codigo));
        } else {
            selectAllCheckbox.checked = false;
            selectAllCheckbox.indeterminate = false;
        }

        // **AÑADIDO**: Cambiar el estilo del botón Limpiar si hay selección
        if (resetBtn) {
            resetBtn.classList.toggle('active-reset', hasSelection);
        }
    }

    function aplicarFiltros() {
        if(searchResultInfo) searchResultInfo.classList.add('hidden');
        if(rutaFilter) rutaFilter.classList.remove('highlight-select');
        if(diasFilterContainer) {
            diasFilterContainer.querySelectorAll('.dia-btn').forEach(btn => btn.classList.remove('highlight'));
        }

        const searchTerm = searchBox.value.toLowerCase().trim();
        const rutaSeleccionada = rutaFilter.value;
        const cadenaSeleccionada = cadenaFilter.value;
        const medallaSeleccionada = medallaFilter.value;
        const sortOption = sortSelect.value;

        let clientesFiltrados = clientes.filter(cliente => {
            const searchableString = `${cliente.codigo} ${cliente.nombre} ${cliente.poblacion} ${cliente.plan} ${cliente.cadena} ${cliente.medalla}`.toLowerCase();
            const matchesSearch = !searchTerm || searchableString.includes(searchTerm);
            const matchesRuta = !rutaSeleccionada || cliente.plan === rutaSeleccionada;
            const matchesCadena = !cadenaSeleccionada || cliente.cadena === cadenaSeleccionada;
            const matchesMedalla = !medallaSeleccionada || cliente.medalla === medallaSeleccionada;
            const matchesDay = !activeDayFilter || cliente.diaVisita.includes(activeDayFilter);
            return matchesSearch && matchesRuta && matchesCadena && matchesMedalla && matchesDay;
        });
        
        if (clientesFiltrados.length === 1 && searchTerm) {
            const clienteUnico = clientesFiltrados[0];
            const rutaCliente = clienteUnico.plan;

            searchResultInfo.innerHTML = `Cliente <strong>${clienteUnico.nombre}</strong> pertenece a la ruta: <strong>${rutaCliente}</strong>`;
            searchResultInfo.classList.remove('hidden');
            rutaFilter.value = rutaCliente;
            rutaFilter.classList.add('highlight-select');
            
            gestionarFiltroDias();

            const diasVisita = [...new Set(clienteUnico.diaVisita.match(/[LMXJVS]/g) || [])];
            diasFilterContainer.querySelectorAll('.dia-btn').forEach(btn => {
                if (diasVisita.includes(btn.dataset.day)) {
                    btn.classList.add('highlight');
                }
            });
        }

        const sortFunctions = {
            'nombre-asc': (a, b) => a.nombre.localeCompare(b.nombre),
            'cadena-asc': (a, b) => a.cadena.localeCompare(b.cadena),
            'codigo-asc': (a, b) => a.codigo.localeCompare(b.codigo),
        };
        clientesFiltrados.sort(sortFunctions[sortOption] || sortFunctions['codigo-asc']);
        
        mostrarClientes(clientesFiltrados);
    }
    
    function gestionarFiltroDias() {
        const rutaSeleccionada = rutaFilter.value;
        diasFilterContainer.innerHTML = '';
        diasFilterContainer.classList.add('hidden');
        if (rutaSeleccionada) {
            const dias = ['L', 'M', 'X', 'J', 'V', 'S'];
            const label = document.createElement('span');
            label.textContent = "Filtrar por día:";
            label.style.fontWeight = 'bold';
            diasFilterContainer.appendChild(label);
            dias.forEach(dia => {
                const btn = document.createElement('button');
                btn.className = 'dia-btn';
                btn.textContent = dia;
                btn.dataset.day = dia;
                if (dia === activeDayFilter) btn.classList.add('active');
                btn.addEventListener('click', onDiaButtonClick);
                diasFilterContainer.appendChild(btn);
            });
            diasFilterContainer.classList.remove('hidden');
        } else {
            activeDayFilter = null;
        }
    }

    function onDiaButtonClick(event) {
        const clickedButton = event.target;
        const day = clickedButton.dataset.day;
        if (clickedButton.classList.contains('active')) {
            activeDayFilter = null;
            clickedButton.classList.remove('active');
        } else {
            diasFilterContainer.querySelectorAll('.dia-btn').forEach(btn => btn.classList.remove('active'));
            clickedButton.classList.add('active');
            activeDayFilter = day;
        }
        aplicarFiltros();
    }

    function limpiarFiltros() {
        document.querySelector('.filter-container').reset();
        sortSelect.selectedIndex = 0;
        activeDayFilter = null;
        selectedClients.clear();
        history.pushState(null, '', window.location.pathname);
        gestionarFiltroDias();
        aplicarFiltros();
    }

    function exportar(clients, type, filename) {
        if(clients.length === 0) return;
    
        if (type === 'pdf') {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();
            doc.setFontSize(16).text(filename, 14, 22);
            doc.setFontSize(10);
            const lineas = clients.map(c => `${c.codigo} | ${c.cadena} | ${c.nombre}, ${c.poblacion}`);
            doc.text(lineas, 14, 32);
            doc.save(`${filename}.pdf`);
        } else if (type === 'excel') {
            const data = clients.map(c => ({
                'Código': c.codigo, 'Ruta': c.plan, 'Cadena': c.cadena, 'Nombre': c.nombre, 'Población': c.poblacion, 'Medalla': c.medalla, 'Días Visita': c.diaVisita
            }));
            const worksheet = XLSX.utils.json_to_sheet(data);
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, "Datos");
            XLSX.writeFile(workbook, `${filename}.xlsx`);
        } else if (type === 'copy') {
            const textToCopy = clients.map(c => `${c.codigo}\t${c.cadena}\t${c.nombre}\t${c.poblacion}`).join('\n');
            navigator.clipboard.writeText(textToCopy).then(() => {
                const button = document.getElementById('copy-selection-btn');
                const originalContent = button.innerHTML;
                button.innerHTML = '<span>¡Copiado!</span>';
                setTimeout(() => button.innerHTML = originalContent, 2000);
            });
        }
    }
    
    function crearMapa(clients) {
        if (clients.length === 0) return;
    
        const MAX_WAYPOINTS = 25; 
        if (clients.length > MAX_WAYPOINTS) {
            alert(`Puedes visualizar un máximo de ${MAX_WAYPOINTS} clientes a la vez. Se mostrarán los primeros ${MAX_WAYPOINTS} de tu selección.`);
            clients = clients.slice(0, MAX_WAYPOINTS);
        }
    
        const formatAddress = (cliente) => {
            const cleanAddress = getCleanAddressForMap(cliente);
            return encodeURIComponent(`${cleanAddress}, Spain`);
        };
        
        const locationsPath = clients.map(formatAddress).join('/');
        const mapsUrl = `https://www.google.com/maps/dir/$${locationsPath}`;
        
        window.open(mapsUrl, '_blank');
    }

    function aplicarFiltrosDesdeURL() {
        const params = new URLSearchParams(window.location.search);
        
        searchBox.value = params.get('q') || '';
        rutaFilter.value = params.get('ruta') || '';
        cadenaFilter.value = params.get('cadena') || '';
        medallaFilter.value = params.get('medalla') || '';
        sortSelect.value = params.get('sort') || 'codigo-asc';
        
        if (rutaFilter.value) {
            gestionarFiltroDias();
            const diaParam = params.get('dia');
            if (diaParam) {
                const diaBtn = diasFilterContainer.querySelector(`.dia-btn[data-day="${diaParam}"]`);
                if (diaBtn) {
                    activeDayFilter = diaParam;
                    diaBtn.classList.add('active');
                }
            }
        }
    }

    // --- 8. INICIALIZACIÓN DE LA APLICACIÓN ---
    function init() {
        // Llenar los selects
        const rutas = [...new Set(clientes.map(c => c.plan))].sort();
        const cadenas = [...new Set(clientes.map(c => c.cadena))].sort();
        const medallas = [...new Set(clientes.map(c => c.medalla))].sort();
        rutas.forEach(ruta => rutaFilter.add(new Option(ruta, ruta)));
        cadenas.forEach(cadena => cadenaFilter.add(new Option(cadena, cadena)));
        medallas.forEach(medalla => medallaFilter.add(new Option(medalla, medalla)));
        
        // Configurar tema inicial
        const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        applyTheme(savedTheme);
        
        // Aplicar filtros de URL y luego renderizar todo
        aplicarFiltrosDesdeURL();
        aplicarFiltros();

        // Asignar todos los event listeners
        toggleViewBtn.addEventListener('click', () => setView(currentView === 'filters' ? 'daily' : 'filters'));
        
        themeToggle.addEventListener('click', () => {
            const newTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
            localStorage.setItem('theme', newTheme);
            applyTheme(newTheme);
        });
        
        window.addEventListener('scroll', () => {
            if(scrollToTopBtn) scrollToTopBtn.classList.toggle('hidden', window.scrollY <= 300)
        });
        if(scrollToTopBtn) scrollToTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

        selectAllCheckbox.addEventListener('change', (e) => {
            currentFilteredClients.forEach(cliente => {
                e.target.checked ? selectedClients.add(cliente.codigo) : selectedClients.delete(cliente.codigo);
            });
            mostrarClientes(currentFilteredClients);
        });
        
        [searchBox, rutaFilter, cadenaFilter, medallaFilter, sortSelect].forEach(el => {
            if(el) el.addEventListener('input', () => {
                if (el.id === 'ruta-filter') {
                    activeDayFilter = null; 
                    gestionarFiltroDias();
                }
                aplicarFiltros();
            });
        });

        if(resetBtn) resetBtn.addEventListener('click', limpiarFiltros);
        
        if (previewSelectionBtn) previewSelectionBtn.addEventListener('click', openPreviewModal);
        if (copySelectionBtn) copySelectionBtn.addEventListener('click', () => exportar(clientes.filter(c => selectedClients.has(c.codigo)), 'copy'));
        if (exportPdfBtn) exportPdfBtn.addEventListener('click', () => exportar(clientes.filter(c => selectedClients.has(c.codigo)), 'pdf', 'Seleccion_Clientes'));
        if (exportExcelBtn) exportExcelBtn.addEventListener('click', () => exportar(clientes.filter(c => selectedClients.has(c.codigo)), 'excel', 'Seleccion_Clientes'));
        
        if (createMapBtn) createMapBtn.addEventListener('click', () => crearMapa(clientes.filter(c => selectedClients.has(c.codigo))));
        
        if(exportExcelDayBtn) exportExcelDayBtn.addEventListener('click', () => exportar(currentDailyClients, 'excel', `Plan_del_${activeDay}`));

        if(closeModalBtn) closeModalBtn.addEventListener('click', closePreviewModal);
        if(previewModal) previewModal.addEventListener('click', (e) => {
            if (e.target === previewModal) closePreviewModal();
        });
    }

    init();
});
