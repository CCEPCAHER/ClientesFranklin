document.addEventListener('DOMContentLoaded', () => {

    const clientes = [
        { "codigo": "8103539", "plan": "CAT21", "cadena": "Condis", "nombre": "De Catalunya, 24", "poblacion": "Aiguafreda", "medalla": "Plata", "diaVisita": "1J-2J-3J-4J" },
        { "codigo": "8105732", "plan": "CAT21", "cadena": "Condis", "nombre": "Carretera de Granera, 41", "poblacion": "Castellterçol", "medalla": "Plata", "diaVisita": "1X-2X-3X-4X" },
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

    const FRANQUICIA_PDV_CODES = new Set([
        "8103539", "8105732", "8109293", "8134816", "8108209", "8108220",
        "8120749", "8124892", "8104059", "8104165", "8107214", "8108090",
        "8108761", "8108763", "8108764", "8108765", "8120481", "8123068",
        "8124713", "8134941", "8107243", "8134283", "8131135", "8133631"
    ]);

    const MEDALLA_EMOJIS = {
        "Platino": "💎",
        "Plata": "🥈",
        "Bronce": "🥉",
        "default": "⚪"
    };
    
    const FRANQUICIA_EMOJI = '🌟';

    const REGALOS_DISPONIBLES = [
        { id: '6131233', nombre: 'Gorras' },
        { id: '6127586', nombre: 'Pizarras' },
        { id: '6131343', nombre: 'Vasos' },
        { id: '6131340', nombre: 'Bolsas' },
        { id: '6127585', nombre: 'Delantales' }
    ];

    const selectedClients = new Set();
    let currentFilteredClients = [];
    let activeDayFilter = null;
    let currentView = 'filters';
    let currentDailyClients = [];
    let activeDay = 'Lunes';
    let map = null;
    const markersLayer = L.layerGroup();

    const geocodeCache = new Map(JSON.parse(sessionStorage.getItem('geocodeCache') || '[]'));

    function saveCache() {
        sessionStorage.setItem('geocodeCache', JSON.stringify(Array.from(geocodeCache.entries())));
    }

    const mainTitle = document.getElementById('main-title');
    const toggleViewBtn = document.getElementById('toggle-view-btn');
    const filterView = document.getElementById('filter-view');
    const dailyRoutesView = document.getElementById('daily-routes-view');
    const searchBox = document.getElementById('search-box');
    const rutaFilter = document.getElementById('ruta-filter');
    const cadenaFilter = document.getElementById('cadena-filter');
    const medallaFilter = document.getElementById('medalla-filter');
    const franquiciaFilter = document.getElementById('franquicia-filter');
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
    const diasNav = document.getElementById('dias-nav');
    const searchResultInfo = document.getElementById('search-result-info');
    const createMapBtn = document.getElementById('create-map-btn');
    const clientCountDaily = document.getElementById('client-count-daily');
    const exportExcelDayBtn = document.getElementById('export-excel-day-btn');
    const actionsBarDaily = document.getElementById('actions-bar-daily');
    const previewModal = document.getElementById('preview-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const modalClientList = document.getElementById('modal-client-list');
    const modalClientCount = document.getElementById('modal-client-count');
    const mapModal = document.getElementById('map-modal');
    const openMapBtn = document.getElementById('open-map-btn');
    const closeMapModalBtn = document.getElementById('close-map-modal-btn');
    const routeDetails = document.getElementById('route-details');
    const manageGiftsBtn = document.getElementById('manage-gifts-btn');
    const giftsModal = document.getElementById('gifts-modal');
    const closeGiftsModalBtn = document.getElementById('close-gifts-modal-btn');
    const modalGiftsList = document.getElementById('modal-gifts-list');
    const copyGiftsBtn = document.getElementById('copy-gifts-btn');

    function getMedalEmojis(cliente) {
        const medallaBase = cliente.medalla || 'default';
        let medallaEmoji = '';

        if (medallaBase.startsWith("Oro Plus")) {
            const numero = parseInt(medallaBase.split(" ").pop(), 10);
            if (!isNaN(numero)) {
                medallaEmoji = '🥇'.repeat(numero);
            } else {
                medallaEmoji = '🥇';
            }
        } else {
            medallaEmoji = MEDALLA_EMOJIS[medallaBase] || MEDALLA_EMOJIS['default'];
        }

        const esFranquicia = FRANQUICIA_PDV_CODES.has(cliente.codigo);
        const medallaFranquicia = esFranquicia ? FRANQUICIA_EMOJI : '';
        
        return `${medallaEmoji}${medallaFranquicia}`;
    }

    function mostrarClientes(clientesAMostrar) {
        if (!clientList) return;
        clientList.innerHTML = '';
        if (noResults) noResults.classList.toggle('hidden', clientesAMostrar.length > 0);
        
        clientesAMostrar.forEach(cliente => {
            const isSelected = selectedClients.has(cliente.codigo);
            const line = document.createElement('div');
            line.className = 'client-line';
            line.classList.toggle('selected', isSelected);
            const medallasFinales = getMedalEmojis(cliente);
            
            line.innerHTML = `
                <label class="checkbox-container" for="check-${cliente.codigo}">
                    <input type="checkbox" id="check-${cliente.codigo}" data-codigo="${cliente.codigo}" ${isSelected ? 'checked' : ''}>
                </label>
                <div class="client-info">
                    <strong>${cliente.cadena} (${cliente.codigo})</strong>
                    <span class="client-address">${cliente.nombre}, ${cliente.poblacion}</span>
                </div>
                <span class="client-medalla">${medallasFinales}</span>
            `;
    
            line.addEventListener('click', (e) => {
                const checkbox = line.querySelector('input[type="checkbox"]');
                if (e.target.nodeName !== 'INPUT') {
                    checkbox.checked = !checkbox.checked;
                }
                const codigo = checkbox.dataset.codigo;
                checkbox.checked ? selectedClients.add(codigo) : selectedClients.delete(codigo);
                updateSelectionUI();
            });
    
            clientList.appendChild(line);
        });
        currentFilteredClients = clientesAMostrar;
        updateSelectionUI();
    }
    
    function aplicarFiltros() {
        const searchTerm = searchBox.value.toLowerCase().trim();

        // --- CORRECCIÓN DEFINITIVA ---
        // Si el buscador está vacío, nos aseguramos de que el desplegable de ruta 
        // no se quede "atascado" con un valor de una búsqueda anterior.
        if (!searchTerm && rutaFilter.classList.contains('highlight-select')) {
            rutaFilter.value = '';
        }

        if(searchResultInfo) searchResultInfo.classList.add('hidden');
        if(rutaFilter) rutaFilter.classList.remove('highlight-select');
        if(diasFilterContainer) {
            diasFilterContainer.querySelectorAll('.dia-btn').forEach(btn => btn.classList.remove('highlight'));
        }

        const rutaSeleccionada = rutaFilter.value;
        const cadenaSeleccionada = cadenaFilter.value;
        const medallaSeleccionada = medallaFilter.value;
        const franquiciaSeleccionada = franquiciaFilter.value;
        const sortOption = sortSelect.value;

        let clientesFiltrados = clientes.filter(cliente => {
            const searchableString = `${cliente.codigo} ${cliente.nombre} ${cliente.poblacion} ${cliente.plan} ${cliente.cadena} ${cliente.medalla}`.toLowerCase();
            
            const esFranquicia = FRANQUICIA_PDV_CODES.has(cliente.codigo);
            const matchesFranquicia = !franquiciaSeleccionada ||
                                      (franquiciaSeleccionada === 'si' && esFranquicia) ||
                                      (franquiciaSeleccionada === 'no' && !esFranquicia);

            const matchesSearch = !searchTerm || searchableString.includes(searchTerm);
            const matchesRuta = !rutaSeleccionada || cliente.plan === rutaSeleccionada;
            const matchesCadena = !cadenaSeleccionada || cliente.cadena === cadenaSeleccionada;
            const matchesMedalla = !medallaSeleccionada || cliente.medalla === medallaSeleccionada;
            const matchesDay = !activeDayFilter || cliente.diaVisita.includes(activeDayFilter);
            
            return matchesSearch && matchesRuta && matchesCadena && matchesMedalla && matchesDay && matchesFranquicia;
        });
        
        if (clientesFiltrados.length === 1 && searchTerm) {
            const clienteUnico = clientesFiltrados[0];
            const medallasEmoji = getMedalEmojis(clienteUnico);
            
            if (searchResultInfo) {
                searchResultInfo.innerHTML = `
                    <span title="Ruta">🗺️ <strong>${clienteUnico.plan}</strong></span>
                    <span class="info-separator">|</span>
                    <span title="Medalla">${medallasEmoji} <strong>${clienteUnico.medalla}</strong></span>
                    <span class="info-separator">|</span>
                    <span title="Días de Visita">📅 <strong>${clienteUnico.diaVisita}</strong></span>
                `;
                searchResultInfo.classList.remove('hidden');
            }

            if (rutaFilter) {
                rutaFilter.value = clienteUnico.plan;
                rutaFilter.classList.add('highlight-select');
            }
            
            gestionarFiltroDias();

            const diasVisita = [...new Set(clienteUnico.diaVisita.match(/[LMXJVS]/g) || [])];
            if (diasFilterContainer) {
                diasFilterContainer.querySelectorAll('.dia-btn').forEach(btn => {
                    if (diasVisita.includes(btn.dataset.day)) {
                        btn.classList.add('highlight');
                    }
                });
            }
        }

        const sortFunctions = {
            'nombre-asc': (a, b) => a.nombre.localeCompare(b.nombre),
            'cadena-asc': (a, b) => a.cadena.localeCompare(b.cadena),
            'codigo-asc': (a, b) => a.codigo.localeCompare(b.codigo),
        };
        clientesFiltrados.sort(sortFunctions[sortOption] || sortFunctions['codigo-asc']);
        
        mostrarClientes(clientesFiltrados);
    }

    function getCleanAddressForMap(cliente) {
        let address = cliente.nombre;
        if (address.includes('·')) {
            address = address.split('·')[1];
        }
        address = address.split(' - ')[0];
        address = address.replace(/\s*\(.*\)/, '');
        return `${address.trim()}, ${cliente.poblacion}`;
    }

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

    function applyTheme(theme) {
        document.body.classList.toggle('dark-mode', theme === 'dark');
        if (themeToggle) {
            const sunIcon = themeToggle.querySelector('.sun');
            const moonIcon = themeToggle.querySelector('.moon');
            if (sunIcon) sunIcon.style.display = theme === 'dark' ? 'none' : 'block';
            if (moonIcon) moonIcon.style.display = theme === 'dark' ? 'block' : 'none';
        }
    };

    function updateSelectionUI() {
        document.querySelectorAll('.client-line').forEach(line => {
            const checkbox = line.querySelector('input[type="checkbox"]');
            if (checkbox) {
                const isSelected = selectedClients.has(checkbox.dataset.codigo);
                line.classList.toggle('selected', isSelected);
                checkbox.checked = isSelected;
            }
        });

        const selectedCount = selectedClients.size;
        if (clientCount) clientCount.textContent = `Mostrando ${currentFilteredClients.length} de ${clientes.length} clientes | (${selectedCount} sel.)`;
        const hasSelection = selectedCount > 0;
        
        const actionButtons = [previewSelectionBtn, exportPdfBtn, exportExcelBtn, copySelectionBtn, openMapBtn, manageGiftsBtn, createMapBtn];
        actionButtons.forEach(btn => {
            if (btn) btn.disabled = !hasSelection;
        });
        
        if (createMapBtn) {
            if (hasSelection) {
                createMapBtn.classList.remove('disabled');
                const clientsToMap = clientes.filter(c => selectedClients.has(c.codigo));
                createMapBtn.href = generarUrlDeNavegacion(clientsToMap);
            } else {
                createMapBtn.classList.add('disabled');
                createMapBtn.href = '#';
            }
        }

        if (selectAllCheckbox) {
            if (currentFilteredClients.length > 0) {
                const allVisibleSelected = currentFilteredClients.every(c => selectedClients.has(c.codigo));
                selectAllCheckbox.checked = allVisibleSelected;
                selectAllCheckbox.indeterminate = !allVisibleSelected && currentFilteredClients.some(c => selectedClients.has(c.codigo));
            } else {
                selectAllCheckbox.checked = false;
                selectAllCheckbox.indeterminate = false;
            }
        }

        if (resetBtn) {
            const hasFilters = searchBox.value || rutaFilter.value || cadenaFilter.value || medallaFilter.value || franquiciaFilter.value;
            resetBtn.classList.toggle('active-reset', hasSelection || hasFilters);
        }
    }

    function gestionarFiltroDias() {
        if (!diasFilterContainer) return;
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
            if (diasFilterContainer) {
                diasFilterContainer.querySelectorAll('.dia-btn').forEach(btn => btn.classList.remove('active'));
            }
            clickedButton.classList.add('active');
            activeDayFilter = day;
        }
        aplicarFiltros();
    }

    function limpiarFiltros() {
        if (searchBox) searchBox.value = '';
        if (rutaFilter) rutaFilter.value = '';
        if (cadenaFilter) cadenaFilter.value = '';
        if (medallaFilter) medallaFilter.value = '';
        if (franquiciaFilter) franquiciaFilter.value = '';
        if (sortSelect) sortSelect.selectedIndex = 0;
        activeDayFilter = null;
        selectedClients.clear();
        history.pushState(null, '', window.location.pathname);
        gestionarFiltroDias();
        aplicarFiltros();
    }
    
    function generarUrlDeNavegacion(clients) {
        if (clients.length === 0) return '#';
        const baseUrl = 'https://www.google.com/maps/dir/';
        const addresses = clients.map(client =>
            encodeURIComponent(getCleanAddressForMap(client))
        ).join('/');
        return baseUrl + addresses;
    }

    function aplicarFiltrosDesdeURL() {
        const params = new URLSearchParams(window.location.search);
        
        if (searchBox) searchBox.value = params.get('q') || '';
        if (rutaFilter) rutaFilter.value = params.get('ruta') || '';
        if (cadenaFilter) cadenaFilter.value = params.get('cadena') || '';
        if (medallaFilter) medallaFilter.value = params.get('medalla') || '';
        if (franquiciaFilter) franquiciaFilter.value = params.get('franquicia') || '';
        if (sortSelect) sortSelect.value = params.get('sort') || 'codigo-asc';
        
        if (rutaFilter && rutaFilter.value) {
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

    function openPreviewModal() {
        if (selectedClients.size === 0) return;
        const clientsToShow = clientes.filter(c => selectedClients.has(c.codigo));
        if (modalClientList) modalClientList.innerHTML = '';
        clientsToShow.forEach(cliente => {
            const clientElement = document.createElement('p');
            clientElement.textContent = `${cliente.codigo} ${cliente.cadena} (${cliente.medalla}) - ${cliente.nombre}, ${cliente.poblacion}`;
            if (modalClientList) modalClientList.appendChild(clientElement);
        });
        if (modalClientCount) modalClientCount.textContent = `Total: ${clientsToShow.length} clientes seleccionados`;
        if (previewModal) previewModal.classList.remove('hidden');
    }

    function closePreviewModal() {
        if (previewModal) previewModal.classList.add('hidden');
    }

    function openGiftsModal() {
        if (selectedClients.size === 0 || !modalGiftsList) return;
        modalGiftsList.innerHTML = '';

        const selectedClientObjects = Array.from(selectedClients)
            .map(id => clientes.find(c => c.codigo === id))
            .filter(Boolean); 

        selectedClientObjects.forEach(client => {
            const clientSection = document.createElement('div');
            clientSection.className = 'gift-client-section';
            clientSection.dataset.clientCode = client.codigo;
            
            clientSection.innerHTML = `<h3>${client.cadena} - ${client.nombre} (${client.poblacion})</h3>`;

            const giftsContainer = document.createElement('div');
            giftsContainer.className = 'gift-list-per-client';

            REGALOS_DISPONIBLES.forEach(regalo => {
                const giftItem = document.createElement('div');
                giftItem.className = 'gift-item';
                giftItem.innerHTML = `
                    <input type="checkbox" id="gift-${client.codigo}-${regalo.id}" data-gift-id="${regalo.id}" data-gift-name="${regalo.nombre}">
                    <label for="gift-${client.codigo}-${regalo.id}">${regalo.id} ${regalo.nombre}</label>
                    <input type="number" min="1" value="1" class="gift-quantity" aria-label="Cantidad para ${regalo.nombre}">
                `;
                giftsContainer.appendChild(giftItem);
            });
            clientSection.appendChild(giftsContainer);
            modalGiftsList.appendChild(clientSection);
        });
        
        if(giftsModal) giftsModal.classList.remove('hidden');
    }

    function closeGiftsModal() {
        if (giftsModal) giftsModal.classList.add('hidden');
    }

    function copyGiftsOrder() {
        if (!modalGiftsList) return;
        const clientSections = modalGiftsList.querySelectorAll('.gift-client-section');
        let finalOutput = [];

        clientSections.forEach(section => {
            const clientCode = section.dataset.clientCode;
            const client = clientes.find(c => c.codigo === clientCode);
            if (!client) return;
            
            let clientLine = `${client.codigo}\t${client.cadena}\t${client.nombre}\t${client.poblacion}`;
            let giftsLines = [];

            const selectedGifts = section.querySelectorAll('input[type="checkbox"]:checked');
            selectedGifts.forEach(checkbox => {
                const giftId = checkbox.dataset.giftId;
                const giftName = checkbox.dataset.giftName.toLowerCase();
                const quantity = checkbox.closest('.gift-item').querySelector('.gift-quantity').value;
                if (parseInt(quantity, 10) > 0) {
                    giftsLines.push(`necesito ${giftId} ${quantity} cajas de ${giftName}`);
                }
            });

            if (giftsLines.length > 0) {
                clientLine += '\n' + giftsLines.join('\n');
            }
            finalOutput.push(clientLine);
        });
        
        const textToCopy = finalOutput.join('\n\n');

        navigator.clipboard.writeText(textToCopy).then(() => {
            if (copyGiftsBtn) {
                const originalText = copyGiftsBtn.querySelector('span').textContent;
                copyGiftsBtn.querySelector('span').textContent = '¡Copiado!';
                copyGiftsBtn.classList.add('btn-success');
                setTimeout(() => {
                    copyGiftsBtn.querySelector('span').textContent = originalText;
                    copyGiftsBtn.classList.remove('btn-success');
                    closeGiftsModal();
                }, 1500);
            }
        }).catch(err => {
            console.error('Error al copiar el texto: ', err);
            alert('No se pudo copiar el texto.');
        });
    }

    async function geocodeAddress(address) {
        if (geocodeCache.has(address)) {
            return geocodeCache.get(address);
        }

        const fullAddress = `${address}, Spain`;
        const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(fullAddress)}`;
        
        try {
            const response = await fetch(url);
            if (!response.ok) {
                geocodeCache.set(address, null); 
                saveCache();
                return null;
            }
            const data = await response.json();
            const coords = (data && data.length > 0) ? { lat: parseFloat(data[0].lat), lon: parseFloat(data[0].lon) } : null;
            
            geocodeCache.set(address, coords);
            saveCache();
            return coords;
        } catch (error) {
            console.error("Error de geocodificación:", error);
            return null;
        }
    }

    async function showMapWithSelectedClients() {
        const selectedClientsData = clientes.filter(c => selectedClients.has(c.codigo));
        if (selectedClientsData.length === 0) return;

        if (mapModal) mapModal.classList.remove('hidden');
        if (routeDetails) routeDetails.innerHTML = '🌍 Preparando mapa...';

        if (!map) {
            map = L.map('map-container').setView([41.5, 2.0], 9);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);
            markersLayer.addTo(map);
        }
        setTimeout(() => map.invalidateSize(), 100);

        markersLayer.clearLayers();
        const allMarkers = [];
        const uncachedClients = [];
        let foundCount = 0;

        if (routeDetails) routeDetails.innerHTML = '🔍 Comprobando caché de ubicaciones...';
        for (const cliente of selectedClientsData) {
            const address = getCleanAddressForMap(cliente);
            if (geocodeCache.has(address)) {
                const coords = geocodeCache.get(address);
                if (coords) {
                    foundCount++;
                    const marker = L.marker([coords.lat, coords.lon]).bindPopup(`<b>${cliente.cadena}</b><br>${cliente.nombre}, ${cliente.poblacion}`);
                    allMarkers.push(marker);
                    markersLayer.addLayer(marker);
                }
            } else {
                uncachedClients.push(cliente);
            }
        }
        
        if (allMarkers.length > 0) {
            map.fitBounds(new L.featureGroup(allMarkers).getBounds().pad(0.3));
        }

        if (uncachedClients.length === 0) {
            if (routeDetails) routeDetails.innerHTML = `✅ Se encontraron ${foundCount} de ${selectedClientsData.length} ubicaciones en la caché.`;
            return;
        }

        for (const [index, cliente] of uncachedClients.entries()) {
            const address = getCleanAddressForMap(cliente);
            if (routeDetails) routeDetails.innerHTML = `🌍 Geocodificando ${index + 1}/${uncachedClients.length}: <em>${address}</em> (esperando 1s)`;
            
            const coords = await geocodeAddress(address);

            if (coords) {
                foundCount++;
                const marker = L.marker([coords.lat, coords.lon]).bindPopup(`<b>${cliente.cadena}</b><br>${cliente.nombre}, ${cliente.poblacion}`);
                allMarkers.push(marker);
                markersLayer.addLayer(marker);
            }
            
            if (allMarkers.length > 0) {
                map.fitBounds(new L.featureGroup(allMarkers).getBounds().pad(0.3));
            }
            
            if (index < uncachedClients.length - 1) {
                await new Promise(resolve => setTimeout(resolve, 1000));
            }
        }
        
        if (routeDetails) routeDetails.innerHTML = `✅ Proceso finalizado. Se encontraron ${foundCount} de ${selectedClientsData.length} ubicaciones.`;
    }

    function closeMapModal() {
        if (mapModal) mapModal.classList.add('hidden');
    }
    
    function exportar(clientsToExport, type, filename) {
        if(clientsToExport.length === 0) {
            alert("No hay datos para exportar.");
            return;
        }
    
        if (type === 'pdf') {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();
            doc.setFontSize(16).text(filename, 14, 22);
            doc.setFontSize(10);
            const lineas = clientsToExport.map(c => `${c.codigo} | ${c.cadena} | ${c.nombre}, ${c.poblacion}`);
            doc.text(lineas, 14, 32);
            doc.save(`${filename}.pdf`);
        } else if (type === 'excel') {
            const data = clientsToExport.map(c => ({
                'Código': c.codigo, 
                'Ruta': c.plan, 
                'Cadena': c.cadena, 
                'Nombre': c.nombre, 
                'Población': c.poblacion, 
                'Medalla': c.medalla, 
                'Días Visita': c.diaVisita
            }));
            const worksheet = XLSX.utils.json_to_sheet(data);
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, "Datos");
            XLSX.writeFile(workbook, `${filename}.xlsx`);
        } else if (type === 'copy') {
            const textToCopy = clientsToExport.map(c => `${c.codigo}\t${c.cadena}\t${c.nombre}\t${c.poblacion}`).join('\n');
            navigator.clipboard.writeText(textToCopy).then(() => {
                if (copySelectionBtn) {
                    const originalContent = copySelectionBtn.innerHTML;
                    copySelectionBtn.innerHTML = '<span>¡Copiado!</span>';
                    copySelectionBtn.classList.add('btn-success');
                    setTimeout(() => {
                        copySelectionBtn.innerHTML = originalContent;
                        copySelectionBtn.classList.remove('btn-success');
                    }, 2000);
                }
            });
        }
    }

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

        if (diasNav && diasNav.children.length === 0) {
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
            if (diasNav) diasNav.querySelectorAll('.dia-nav-btn').forEach(b => b.classList.toggle('active', b.dataset.dia === nombreDia));
            if (rutasContent) rutasContent.innerHTML = '';
            currentDailyClients = [];

            const rutasDelDia = rutasPorDia[nombreDia];
            const planesOrdenados = Object.keys(rutasDelDia).sort();

            if (planesOrdenados.length === 0) {
                if (rutasContent) rutasContent.innerHTML = '<p class="no-rutas">🏖️ No hay rutas asignadas para este día.</p>';
                if (routeCardCarouselWrapper) routeCardCarouselWrapper.classList.add('hidden');
                if (actionsBarDaily) actionsBarDaily.classList.add('hidden');
                return;
            }
            if(routeCardCarouselWrapper) routeCardCarouselWrapper.classList.remove('hidden');
            if(actionsBarDaily) actionsBarDaily.classList.remove('hidden');
            
            planesOrdenados.forEach(plan => {
                const clientesDelPlan = rutasDelDia[plan];
                currentDailyClients.push(...clientesDelPlan);
                const rutaCard = document.createElement('div');
                rutaCard.className = 'ruta-card';
                rutaCard.innerHTML = `<h3>Ruta: ${plan}</h3><ul>${
                    clientesDelPlan.sort((a,b) => a.codigo.localeCompare(b.codigo)).map(cliente => {
                        const medallasFinales = getMedalEmojis(cliente);
                        return `<li>
                            <span class="client-code">${cliente.codigo}</span>
                            <div class="client-details"><strong>${cliente.cadena}</strong> - ${cliente.nombre}, <em>${cliente.poblacion}</em></div>
                            <span class="client-medalla">${medallasFinales}</span>
                        </li>`;
                    }).join('')
                }</ul>`;
                if (rutasContent) rutasContent.appendChild(rutaCard);
            });
            
            if (clientCountDaily) clientCountDaily.textContent = `${currentDailyClients.length} clientes en el plan de hoy.`;
            setTimeout(updateRouteCarouselButtons, 100);
        }
        
        function updateDayCarouselButtons() {
            if (!diasNav || !dayCarouselBtnLeft || !dayCarouselBtnRight) return;
            const scrollLeft = Math.round(diasNav.scrollLeft);
            const maxScrollLeft = diasNav.scrollWidth - diasNav.clientWidth;
            dayCarouselBtnLeft.disabled = scrollLeft <= 1;
            dayCarouselBtnRight.disabled = scrollLeft >= maxScrollLeft - 1;
        }

        if(dayCarouselBtnLeft) dayCarouselBtnLeft.addEventListener('click', () => diasNav.scrollBy({ left: -250, behavior: 'smooth' }));
        if(dayCarouselBtnRight) dayCarouselBtnRight.addEventListener('click', () => diasNav.scrollBy({ left: 250, behavior: 'smooth' }));
        if(diasNav) diasNav.addEventListener('scroll', () => setTimeout(updateDayCarouselButtons, 150));
        
        if(routeCardBtnLeft) routeCardBtnLeft.addEventListener('click', () => rutasContent.scrollBy({ left: -(rutasContent.querySelector('.ruta-card')?.offsetWidth || 300) - 15, behavior: 'smooth' }));
        if(routeCardBtnRight) routeCardBtnRight.addEventListener('click', () => rutasContent.scrollBy({ left: (rutasContent.querySelector('.ruta-card')?.offsetWidth || 300) + 15, behavior: 'smooth' }));
        if(rutasContent) rutasContent.addEventListener('scroll', () => setTimeout(updateRouteCarouselButtons, 150));

        if(diasNav) diasNav.addEventListener('click', e => {
            if (e.target.classList.contains('dia-nav-btn')) mostrarRutasDelDia(e.target.dataset.dia);
        });

        mostrarRutasDelDia('Lunes');
        setTimeout(updateDayCarouselButtons, 100);
    }

    function init() {
        const rutas = [...new Set(clientes.map(c => c.plan))].sort();
        const cadenas = [...new Set(clientes.map(c => c.cadena))].sort();
        const medallas = [...new Set(clientes.map(c => c.medalla))].sort();
        
        const populate = (select, items) => { if (select) items.forEach(item => select.add(new Option(item, item))); };
        populate(rutaFilter, rutas);
        populate(cadenaFilter, cadenas);
        populate(medallaFilter, medallas);
        
        const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        applyTheme(savedTheme);
        
        aplicarFiltrosDesdeURL();
        aplicarFiltros();

        if (toggleViewBtn) toggleViewBtn.addEventListener('click', () => setView(currentView === 'filters' ? 'daily' : 'filters'));
        if (themeToggle) themeToggle.addEventListener('click', () => {
            const newTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
            localStorage.setItem('theme', newTheme);
            applyTheme(newTheme);
        });
        
        window.addEventListener('scroll', () => scrollToTopBtn && scrollToTopBtn.classList.toggle('hidden', window.scrollY <= 300));
        if(scrollToTopBtn) scrollToTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

        if (selectAllCheckbox) selectAllCheckbox.addEventListener('change', e => {
            currentFilteredClients.forEach(cliente => e.target.checked ? selectedClients.add(cliente.codigo) : selectedClients.delete(cliente.codigo));
            updateSelectionUI();
        });
        
        [searchBox, rutaFilter, cadenaFilter, medallaFilter, franquiciaFilter, sortSelect].forEach(el => {
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
        if (exportExcelDayBtn) exportExcelDayBtn.addEventListener('click', () => exportar(currentDailyClients, 'excel', `Plan_del_${activeDay}`));
        if (openMapBtn) openMapBtn.addEventListener('click', showMapWithSelectedClients);
        if (manageGiftsBtn) manageGiftsBtn.addEventListener('click', openGiftsModal);
        
        if (closeModalBtn) closeModalBtn.addEventListener('click', closePreviewModal);
        if (closeMapModalBtn) closeMapModalBtn.addEventListener('click', closeMapModal);
        if (closeGiftsModalBtn) closeGiftsModalBtn.addEventListener('click', closeGiftsModal);
        if (copyGiftsBtn) copyGiftsBtn.addEventListener('click', copyGiftsOrder);

        window.addEventListener('click', (e) => {
            if (e.target === previewModal) closePreviewModal();
            if (e.target === mapModal) closeMapModal();
            if (e.target === giftsModal) closeGiftsModal();
        });
    }

    init();
});
