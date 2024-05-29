const mduList = [
    {
        MDU: "East Bel-Air Residences Building A",
        ADDRESS: "FELIX AVENUE CAINTA RIZAL",
        MUNICIPALITY: "CAINTA RIZAL",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "East Bel-Air Residences Building B",
        ADDRESS: "FELIX AVENUE CAINTA RIZAL",
        MUNICIPALITY: "CAINTA RIZAL",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "East Bel-Air Residences Building C",
        ADDRESS: "FELIX AVENUE CAINTA RIZAL",
        MUNICIPALITY: "CAINTA RIZAL",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "The Cambridge Village Cluster 24",
        ADDRESS: "SAN ANDRES CAINTA RIZAL",
        MUNICIPALITY: "CAINTA RIZAL",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "The Cambridge Village Cluster 25",
        ADDRESS: "SAN ANDRES CAINTA RIZAL",
        MUNICIPALITY: "CAINTA RIZAL",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "The Cambridge Village Cluster 26",
        ADDRESS: "SAN ANDRES CAINTA RIZAL",
        MUNICIPALITY: "CAINTA RIZAL",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "The Cambridge Village Cluster 27",
        ADDRESS: "SAN ANDRES CAINTA RIZAL",
        MUNICIPALITY: "CAINTA RIZAL",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "The Cambridge Village Cluster 28",
        ADDRESS: "SAN ANDRES CAINTA RIZAL",
        MUNICIPALITY: "CAINTA RIZAL",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "The Cambridge Village Cluster 30",
        ADDRESS: "SAN ANDRES CAINTA RIZAL",
        MUNICIPALITY: "CAINTA RIZAL",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "The Cambridge Village Cluster 31",
        ADDRESS: "SAN ANDRES CAINTA RIZAL",
        MUNICIPALITY: "CAINTA RIZAL",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "The Cambridge Village Cluster 32",
        ADDRESS: "SAN ANDRES CAINTA RIZAL",
        MUNICIPALITY: "CAINTA RIZAL",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "The Cambridge Village Cluster 33",
        ADDRESS: "SAN ANDRES CAINTA RIZAL",
        MUNICIPALITY: "CAINTA RIZAL",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "The Cambridge Village Cluster 34",
        ADDRESS: "SAN ANDRES CAINTA RIZAL",
        MUNICIPALITY: "CAINTA RIZAL",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "The Cambridge Village Cluster 35",
        ADDRESS: "SAN ANDRES CAINTA RIZAL",
        MUNICIPALITY: "CAINTA RIZAL",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "The Cambridge Village Cluster 36",
        ADDRESS: "SAN ANDRES CAINTA RIZAL",
        MUNICIPALITY: "CAINTA RIZAL",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "The Cambridge Village Cluster 37",
        ADDRESS: "SAN ANDRES CAINTA RIZAL",
        MUNICIPALITY: "CAINTA RIZAL",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Monte Carlo Residences Monte Carlo Building",
        ADDRESS: "IMELDA AVENUE MARCOS HIGHWAY CAINTA RIZAL",
        MUNICIPALITY: "CAINTA RIZAL",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Sta. Lucia Santorini Condotel  Residences",
        ADDRESS: "FELIX AVENUE CAINTA RIZAL",
        MUNICIPALITY: "CAINTA RIZAL",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Amaia Steps Novaliches Bldg. A",
        ADDRESS: "BRGY SAN AGUSTIN DEPARO ROAD CALOOCAN CITY",
        MUNICIPALITY: "CALOOCAN CITY",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Amaia Steps Novaliches Bldg. B",
        ADDRESS: "BRGY SAN AGUSTIN DEPARO ROAD CALOOCAN CITY",
        MUNICIPALITY: "CALOOCAN CITY",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Amaia Steps Novaliches Bldg. C",
        ADDRESS: "BRGY SAN AGUSTIN DEPARO ROAD CALOOCAN CITY",
        MUNICIPALITY: "CALOOCAN CITY",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Amaia Steps Novaliches Bldg. D",
        ADDRESS: "BRGY SAN AGUSTIN DEPARO ROAD CALOOCAN CITY",
        MUNICIPALITY: "CALOOCAN CITY",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Gramercy Residences",
        ADDRESS: "KALAYAAN AVENUE BRGY POBLACION MAKATI CITY",
        MUNICIPALITY: "MAKATI",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Belton Place",
        ADDRESS: "YAKAL STREET CORNER CHINO ROSES STREET BRGY SAN ANTONIO MAKATI CTY",
        MUNICIPALITY: "MAKATI",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Dian Place",
        ADDRESS: "1720 DIAN STREET MAKATI CITY",
        MUNICIPALITY: "MAKATI",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Two Central",
        ADDRESS: "VALERO STREET SALCEDO VILLAGE  MAKATI CITY",
        MUNICIPALITY: "MAKATI",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "Three Central",
        ADDRESS: "VALERO STREET SALCEDO VILLAGE  MAKATI CITY",
        MUNICIPALITY: "MAKATI",
        EXCLUSIVITY: "Non-Ex Only Provider"
    },
    {
        MDU: "Guadalupe Nuevo-My Town NYC",
        ADDRESS: "VISAYA CORNER JACINTO STREET GUADALUPE NUEVO MAKATI CITY",
        MUNICIPALITY: "MAKATI",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "Makati Executive Tower 4",
        ADDRESS: "CITYLAND SQUARE SEN GIL PUYAT AVENUE CORNER MEDINA STREET PIO DEL PILAR MAKATI CITY",
        MUNICIPALITY: "MAKATI",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Senta",
        ADDRESS: "140 LEGASPI STREET CORNER RODRIGUEZ STREET LEGASPI VILLAGE MAKATI CITY",
        MUNICIPALITY: "MAKATI",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Eton Parkview Greenbelt",
        ADDRESS: "112 GAMBOA MAKATI CITY",
        MUNICIPALITY: "MAKATI",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Greenbelt Madison",
        ADDRESS: "176 SALCEDO STREET LEGASPI VILLAGE MAKATI CITY",
        MUNICIPALITY: "MAKATI",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Signa Designer Residences Tower 1",
        ADDRESS: "VALEROS STREET CORNER VA RUFINO STREET SALCEDO VILLAGE BRGY BEL AIR MAKATI CITY",
        MUNICIPALITY: "MAKATI",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Signa Designer Residences Tower 2",
        ADDRESS: "VALEROS STREET CORNER VA RUFINO STREET SALCEDO VILLAGE BRGY BEL AIR MAKATI CITY",
        MUNICIPALITY: "MAKATI",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Knightsbridge Residences",
        ADDRESS: "KALAYAAN AVENUE BRGY POBLACION MAKATI CITY",
        MUNICIPALITY: "MAKATI",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Milano Residences",
        ADDRESS: "KALAYAAN AVENUE BRGY POBLACION MAKATI CITY",
        MUNICIPALITY: "MAKATI",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Eton tower",
        ADDRESS: "LEGASPI VILLAGE MAKATI",
        MUNICIPALITY: "MAKATI",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Greenbelt Hamilton Tower 1",
        ADDRESS: "LEGASPI VILLAGE MAKATI",
        MUNICIPALITY: "MAKATI",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Greenbelt Hamilton Tower 2",
        ADDRESS: "LEGASPI VILLAGE MAKATI",
        MUNICIPALITY: "MAKATI",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Park Terraces Point Tower",
        ADDRESS: "ARNAIZ AVENUE MAKATI",
        MUNICIPALITY: "MAKATI",
        EXCLUSIVITY: "Non-Ex Only Provider"
    },
    {
        MDU: "Park Terraces Tower 2",
        ADDRESS: "ARNAIZ AVENUE MAKATI",
        MUNICIPALITY: "MAKATI",
        EXCLUSIVITY: "Non-Ex Only Provider"
    },
    {
        MDU: "The Residences at Makati Place/Alphaland Makati Tower 1",
        ADDRESS: "MALUGAY STREET BRGY SAN ANTONIO MAKATI CITY",
        MUNICIPALITY: "MAKATI",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "The Residences at Makati Place/Alphaland Makati Tower 2",
        ADDRESS: "MALUGAY STREET BRGY SAN ANTONIO MAKATI CITY",
        MUNICIPALITY: "MAKATI",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "Avida Towers Asten Tower 1",
        ADDRESS: "MALUGAY STREET BRGY SAN ANTONIO MAKATI CITY",
        MUNICIPALITY: "MAKATI",
        EXCLUSIVITY: "Non-Ex Only Provider"
    },
    {
        MDU: "Avida Towers Asten Tower 2",
        ADDRESS: "MALUGAY STREET BRGY SAN ANTONIO MAKATI CITY",
        MUNICIPALITY: "MAKATI",
        EXCLUSIVITY: "Non-Ex Only Provider"
    },
    {
        MDU: "Paseo Heights Residences",
        ADDRESS: "LP LEVISTE STREET MAKATI CITY",
        MUNICIPALITY: "MAKATI",
        EXCLUSIVITY: "With Competitor"
    },
    {
        MDU: "Mareic Residences/ One Penn Place",
        ADDRESS: "TORDESILLAS MAKATI CITY",
        MUNICIPALITY: "MAKATI",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Garden Towers Residences Tower 1",
        ADDRESS: "EAST STREET MAKATI CITY",
        MUNICIPALITY: "MAKATI",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "Salcedo Skysuites Residences",
        ADDRESS: "HV DELA COSTA MAKATI",
        MUNICIPALITY: "MAKATI",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "Ram Plaza Legazpi Residences Tower 1",
        ADDRESS: "LEGAZPI VILLAGE MAKATI CITY",
        MUNICIPALITY: "MAKATI",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "Acqua Residences Niagara Building",
        ADDRESS: "CORONADO STREET  BRGY HULO MANDALUYONG CITY",
        MUNICIPALITY: "MANDALUYONG",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Acqua Residences Sutherland Building",
        ADDRESS: "CORONADO STREET  BRGY HULO MANDALUYONG CITY",
        MUNICIPALITY: "MANDALUYONG",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Acqua Residences Livingstone Building",
        ADDRESS: "CORONADO STREET  BRGY HULO MANDALUYONG CITY",
        MUNICIPALITY: "MANDALUYONG",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Acqua Residences Dettifoss Building",
        ADDRESS: "CORONADO STREET  BRGY HULO MANDALUYONG CITY",
        MUNICIPALITY: "MANDALUYONG",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Acqua Residences Iguazu Building",
        ADDRESS: "CORONADO STREET  BRGY HULO MANDALUYONG CITY",
        MUNICIPALITY: "MANDALUYONG",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Tivoli Gardens Hibiscus Tower",
        ADDRESS: "CORONADO STREET  BRGY HULO MANDALUYONG CITY",
        MUNICIPALITY: "MANDALUYONG",
        EXCLUSIVITY: "With Competitor"
    },
    {
        MDU: "Sonata Tower 1",
        ADDRESS: "SAN MIGUEL AVENUE CORNER LOURDES STREET WACKWACK GREEN HILLS ORTIGAS CENTER MANDALUYONG",
        MUNICIPALITY: "MANDALUYONG",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "Sonata Tower 2",
        ADDRESS: "SAN MIGUEL AVENUE CORNER LOURDES STREET WACKWACK GREEN HILLS ORTIGAS CENTER MANDALUYONG",
        MUNICIPALITY: "MANDALUYONG",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "Gateway Regency",
        ADDRESS: "PIONEER MANDALUYONG CITY",
        MUNICIPALITY: "MANDALUYONG",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Flair Towers- North Tower",
        ADDRESS: "RELIANCE CORNER PINES STREET MANDALUYONG CITY",
        MUNICIPALITY: "MANDALUYONG",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Flair Towers- South Tower",
        ADDRESS: "RELIANCE CORNER PINES STREET MANDALUYONG CITY",
        MUNICIPALITY: "MANDALUYONG",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Suntrust Treetop Villas Cluster 1",
        ADDRESS: "600 CORONADO STREET BRGY HULO MANDALUYONG CITY",
        MUNICIPALITY: "MANDALUYONG",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Suntrust Treetop Villas Cluster 2",
        ADDRESS: "600 CORONADO STREET BRGY HULO MANDALUYONG CITY",
        MUNICIPALITY: "MANDALUYONG",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Suntrust Treetop Villas Cluster 3",
        ADDRESS: "600 CORONADO STREET BRGY HULO MANDALUYONG CITY",
        MUNICIPALITY: "MANDALUYONG",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Grand Central Residences",
        ADDRESS: "CITYLAND SULTAN STREET BRGY HIGHWAY HILLS MANDALUYONG CITY",
        MUNICIPALITY: "MANDALUYONG",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Amaia Skies Shaw Tower 1",
        ADDRESS: "SHAW BLVD CORNER SAMAT STREET HIGHWAY HILLS MANDALUYONG CITY",
        MUNICIPALITY: "MANDALUYONG",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "SMDC Fame Residences Tower 1",
        ADDRESS: "EDSA MANDALUYONG CITY",
        MUNICIPALITY: "MANDALUYONG",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "SMDC Fame Residences Tower 2",
        ADDRESS: "EDSA MANDALUYONG CITY",
        MUNICIPALITY: "MANDALUYONG",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Cityland Pines Peak Tower 2",
        ADDRESS: "PINES STREET HIGHWAY HILLS MANDALUYNG CITY",
        MUNICIPALITY: "MANDALUYONG",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "Sunshine 100 Tower 3",
        ADDRESS: "PIONEER MANDALUYONG CITY",
        MUNICIPALITY: "MANDALUYONG",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "Wynn Plaza Building A",
        ADDRESS: "1674 LEON GUINTO CORNER MALVAR STREET AND AGONCILLO MALATE MANILA",
        MUNICIPALITY: "MANILA",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Wynn Plaza Building B",
        ADDRESS: "1674 LEON GUINTO CORNER MALVAR STREET AND AGONCILLO MALATE MANILA",
        MUNICIPALITY: "MANILA",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Suntrust Adriatico Tower A",
        ADDRESS: "M ADRIATICO STREET MALATE MANILA",
        MUNICIPALITY: "MANILA",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "Suntrust Adriatico Tower B",
        ADDRESS: "M ADRIATICO STREET MALATE MANILA",
        MUNICIPALITY: "MANILA",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "Suntrust Adriatico Tower C",
        ADDRESS: "M ADRIATICO STREET MALATE MANILA",
        MUNICIPALITY: "MANILA",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "Suntrust Adriatico Tower C",
        ADDRESS: "TAFT AVENUE MANILA",
        MUNICIPALITY: "MANILA",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "Suntrust Parkview  Dahlia Building",
        ADDRESS: "181 NATIVIDAD ALMEDA-LOPEZ STREEY BRGY 659-A ERMITA MANILA",
        MUNICIPALITY: "MANILA",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "Suntrust Parkview  Acacia Building",
        ADDRESS: "181 NATIVIDAD ALMEDA-LOPEZ STREEY BRGY 659-A ERMITA MANILA",
        MUNICIPALITY: "MANILA",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "Suntrust Parkview  Eugenia Building",
        ADDRESS: "181 NATIVIDAD ALMEDA-LOPEZ STREEY BRGY 659-A ERMITA MANILA",
        MUNICIPALITY: "MANILA",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "Suntrust Parkview Lily Building",
        ADDRESS: "181 NATIVIDAD ALMEDA-LOPEZ STREEY BRGY 659-A ERMITA MANILA",
        MUNICIPALITY: "MANILA",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "Suntrust Parkview Narra Building",
        ADDRESS: "181 NATIVIDAD ALMEDA-LOPEZ STREEY BRGY 659-A ERMITA MANILA",
        MUNICIPALITY: "MANILA",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "Suntrust Parkview Molave Building",
        ADDRESS: "181 NATIVIDAD ALMEDA-LOPEZ STREEY BRGY 659-A ERMITA MANILA",
        MUNICIPALITY: "MANILA",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "Birch Tower",
        ADDRESS: "1622 J BOCOBO STREET MALATE MANILA",
        MUNICIPALITY: "MANILA",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Green Residences",
        ADDRESS: "2441 TAFT AVENUE MALATE MANILA",
        MUNICIPALITY: "MANILA",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "AVIDA Towers Prime Taft Tower 1",
        ADDRESS: "DONADA STREET BRGY 36 ZONE 3 TAFT AVENUE PASAY CITY",
        MUNICIPALITY: "MANILA",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "AVIDA Towers Prime Taft Tower 2",
        ADDRESS: "DONADA STREET BRGY 36 ZONE 3 TAFT AVENUE PASAY CITY",
        MUNICIPALITY: "MANILA",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "8 Eton Adriatico",
        ADDRESS: "PADRE FAURA STREET CORNER BOCOBO STREET MANILA CITY",
        MUNICIPALITY: "MANILA",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "AVIDA Towers Intima",
        ADDRESS: "QUIRINO AVENUE EXTENSION COR ZULETA ST PACO MANILA",
        MUNICIPALITY: "MANILA",
        EXCLUSIVITY: "Non-Ex Only Provider"
    },
    {
        MDU: "Torre Central Residences",
        ADDRESS: "SAMPALOC MANILA",
        MUNICIPALITY: "MANILA",
        EXCLUSIVITY: "With Competitor"
    },
    {
        MDU: "Noble Place Residences",
        ADDRESS: "JUAN LUNA STREET BINONDO MANILA",
        MUNICIPALITY: "MANILA",
        EXCLUSIVITY: "With Competitor"
    },
    {
        MDU: "Pacific Skyloft Residences",
        ADDRESS: "1160 GOVERNOR FORBES SAMPALOC MANILA",
        MUNICIPALITY: "MANILA",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "2Torre Lorenzo",
        ADDRESS: "TAFT AVENUE MALATE MANILA",
        MUNICIPALITY: "MANILA",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "Covent Garden South Tower",
        ADDRESS: "SANTOL MAGSAYSAY BLVD STA MESA MANILA",
        MUNICIPALITY: "MANILA",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "Rhapsody Residences Carillon",
        ADDRESS: "EAST SERVICE ROAD BRGY BULI MUNTINLUPA CITY",
        MUNICIPALITY: "MUNTINLUPA",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Rhapsody Residences Cello",
        ADDRESS: "EAST SERVICE ROAD BRGY BULI MUNTINLUPA CITY",
        MUNICIPALITY: "MUNTINLUPA",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Rhapsody Clarinet",
        ADDRESS: "EAST SERVICE ROAD BRGY BULI MUNTINLUPA CITY",
        MUNICIPALITY: "MUNTINLUPA",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Rhapsody Lyre",
        ADDRESS: "EAST SERVICE ROAD BRGY BULI MUNTINLUPA CITY",
        MUNICIPALITY: "MUNTINLUPA",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Rhapsody Harmonica",
        ADDRESS: "EAST SERVICE ROAD BRGY BULI MUNTINLUPA CITY",
        MUNICIPALITY: "MUNTINLUPA",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Rhapsody Mandolin",
        ADDRESS: "EAST SERVICE ROAD BRGY BULI MUNTINLUPA CITY",
        MUNICIPALITY: "MUNTINLUPA",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Rhapsody Marimba",
        ADDRESS: "EAST SERVICE ROAD BRGY BULI MUNTINLUPA CITY",
        MUNICIPALITY: "MUNTINLUPA",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Rhapsody Maraca",
        ADDRESS: "EAST SERVICE ROAD BRGY BULI MUNTINLUPA CITY",
        MUNICIPALITY: "MUNTINLUPA",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Rhapsody Viola",
        ADDRESS: "EAST SERVICE ROAD BRGY BULI MUNTINLUPA CITY",
        MUNICIPALITY: "MUNTINLUPA",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Asia Enclaves Sato 1",
        ADDRESS: "KM 19 WEST SERVICE ROAD BRGY CUPANG MUNTINLUPA CITY",
        MUNICIPALITY: "MUNTINLUPA",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Asia Enclaves Sato 2",
        ADDRESS: "KM 19 WEST SERVICE ROAD BRGY CUPANG MUNTINLUPA CITY",
        MUNICIPALITY: "MUNTINLUPA",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Asia Enclaves Sato 3",
        ADDRESS: "KM 19 WEST SERVICE ROAD BRGY CUPANG MUNTINLUPA CITY",
        MUNICIPALITY: "MUNTINLUPA",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Asia Enclaves Sato 4",
        ADDRESS: "KM 19 WEST SERVICE ROAD BRGY CUPANG MUNTINLUPA CITY",
        MUNICIPALITY: "MUNTINLUPA",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Asia Enclaves Sato 5",
        ADDRESS: "KM 19 WEST SERVICE ROAD BRGY CUPANG MUNTINLUPA CITY",
        MUNICIPALITY: "MUNTINLUPA",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Escalades South Metro Bldg A",
        ADDRESS: "MERALCO ROAD CORNER DR A SANTOS BRGY SUCAT MUNTINLUPA CITY",
        MUNICIPALITY: "MUNTINLUPA",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Escalades South Metro Bldg B",
        ADDRESS: "MERALCO ROAD CORNER DR A SANTOS BRGY SUCAT MUNTINLUPA CITY",
        MUNICIPALITY: "MUNTINLUPA",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "East Bay Residences Hudson Tower 1",
        ADDRESS: "KM 21 EAST SERVICE ROAD BRGY SUCAT MUNTINLUPA",
        MUNICIPALITY: "MUNTINLUPA",
        EXCLUSIVITY: "Non-Ex Only Provider"
    },
    {
        MDU: "East Bay Residences Hudson Tower 5",
        ADDRESS: "KM 21 EAST SERVICE ROAD BRGY SUCAT MUNTINLUPA",
        MUNICIPALITY: "MUNTINLUPA",
        EXCLUSIVITY: "Non-Ex Only Provider"
    },
    {
        MDU: "East Bay Residences Chelsea Tower 1",
        ADDRESS: "KM 21 EAST SERVICE ROAD BRGY SUCAT MUNTINLUPA",
        MUNICIPALITY: "MUNTINLUPA",
        EXCLUSIVITY: "Non-Ex Only Provider"
    },
    {
        MDU: "East Bay Residences Chelsea Tower 2",
        ADDRESS: "KM 21 EAST SERVICE ROAD BRGY SUCAT MUNTINLUPA",
        MUNICIPALITY: "MUNTINLUPA",
        EXCLUSIVITY: "Non-Ex Only Provider"
    },
    {
        MDU: "East Bay Residences Chelsea Tower 3",
        ADDRESS: "KM 21 EAST SERVICE ROAD BRGY SUCAT MUNTINLUPA",
        MUNICIPALITY: "MUNTINLUPA",
        EXCLUSIVITY: "Non-Ex Only Provider"
    },
    {
        MDU: "East Bay Residences Bryant Tower 3",
        ADDRESS: "KM 21 EAST SERVICE ROAD BRGY SUCAT MUNTINLUPA",
        MUNICIPALITY: "MUNTINLUPA",
        EXCLUSIVITY: "Non-Ex Only Provider"
    },
    {
        MDU: "Solano Hills Building 1",
        ADDRESS: "VILLONGCO STREET BRGY SUCAT MUNTINLUPA CITY",
        MUNICIPALITY: "MUNTINLUPA",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Solano Hills Building 2",
        ADDRESS: "VILLONGCO STREET BRGY SUCAT MUNTINLUPA CITY",
        MUNICIPALITY: "MUNTINLUPA",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Solano Hills Building 3",
        ADDRESS: "VILLONGCO STREET BRGY SUCAT MUNTINLUPA CITY",
        MUNICIPALITY: "MUNTINLUPA",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Solano Hills Building 4",
        ADDRESS: "VILLONGCO STREET BRGY SUCAT MUNTINLUPA CITY",
        MUNICIPALITY: "MUNTINLUPA",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Solano Hills Building 5",
        ADDRESS: "VILLONGCO STREET BRGY SUCAT MUNTINLUPA CITY",
        MUNICIPALITY: "MUNTINLUPA",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Solano Hills Building 6",
        ADDRESS: "VILLONGCO STREET BRGY SUCAT MUNTINLUPA CITY",
        MUNICIPALITY: "MUNTINLUPA",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Solano Hills Building 7",
        ADDRESS: "VILLONGCO STREET BRGY SUCAT MUNTINLUPA CITY",
        MUNICIPALITY: "MUNTINLUPA",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Solano Hills Building 8",
        ADDRESS: "VILLONGCO STREET BRGY SUCAT MUNTINLUPA CITY",
        MUNICIPALITY: "MUNTINLUPA",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Solano Hills Building 9",
        ADDRESS: "VILLONGCO STREET BRGY SUCAT MUNTINLUPA CITY",
        MUNICIPALITY: "MUNTINLUPA",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Solano Hills Building 10",
        ADDRESS: "VILLONGCO STREET BRGY SUCAT MUNTINLUPA CITY",
        MUNICIPALITY: "MUNTINLUPA",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Solano Hills Building 11",
        ADDRESS: "VILLONGCO STREET BRGY SUCAT MUNTINLUPA CITY",
        MUNICIPALITY: "MUNTINLUPA",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Solano Hills Building 15",
        ADDRESS: "VILLONGCO STREET BRGY SUCAT MUNTINLUPA CITY",
        MUNICIPALITY: "MUNTINLUPA",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Solano Hills Building 16",
        ADDRESS: "VILLONGCO STREET BRGY SUCAT MUNTINLUPA CITY",
        MUNICIPALITY: "MUNTINLUPA",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Bristol at Parkway Residences",
        ADDRESS: "MUNTINLUPA",
        MUNICIPALITY: "MUNTINLUPA",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "Sienna Park Residences Auburn",
        ADDRESS: "WEST SERVICE ROAD BRGY SUNVALLEY MUNTINLUPA CITY",
        MUNICIPALITY: "MUNTINLUPA",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Sienna Park Residences Cetrine",
        ADDRESS: "WEST SERVICE ROAD BRGY SUNVALLEY MUNTINLUPA CITY",
        MUNICIPALITY: "MUNTINLUPA",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Sienna Park Residences Lilac",
        ADDRESS: "WEST SERVICE ROAD BRGY SUNVALLEY MUNTINLUPA CITY",
        MUNICIPALITY: "MUNTINLUPA",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Sienna Park Residences Indigo",
        ADDRESS: "WEST SERVICE ROAD BRGY SUNVALLEY MUNTINLUPA CITY",
        MUNICIPALITY: "MUNTINLUPA",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Sienna Park Residences Cerise",
        ADDRESS: "WEST SERVICE ROAD BRGY SUNVALLEY MUNTINLUPA CITY",
        MUNICIPALITY: "MUNTINLUPA",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Sienna Park Residences Olive",
        ADDRESS: "WEST SERVICE ROAD BRGY SUNVALLEY MUNTINLUPA CITY",
        MUNICIPALITY: "MUNTINLUPA",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Sienna Park Residences Plum",
        ADDRESS: "WEST SERVICE ROAD BRGY SUNVALLEY MUNTINLUPA CITY",
        MUNICIPALITY: "MUNTINLUPA",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Sienna Park Residences Crimson",
        ADDRESS: "WEST SERVICE ROAD BRGY SUNVALLEY MUNTINLUPA CITY",
        MUNICIPALITY: "MUNTINLUPA",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Sienna Park Residences Magenta",
        ADDRESS: "WEST SERVICE ROAD BRGY SUNVALLEY MUNTINLUPA CITY",
        MUNICIPALITY: "MUNTINLUPA",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Sienna Park Residences Peach",
        ADDRESS: "WEST SERVICE ROAD BRGY SUNVALLEY MUNTINLUPA CITY",
        MUNICIPALITY: "MUNTINLUPA",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Sienna Park Residences Lavender",
        ADDRESS: "WEST SERVICE ROAD BRGY SUNVALLEY MUNTINLUPA CITY",
        MUNICIPALITY: "MUNTINLUPA",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "AVIDA Altura Tower 1",
        ADDRESS: "SOUTH PARK DISTIRCT BRGY NATIONAL ROAD ALABANG MUNTINLUPA",
        MUNICIPALITY: "MUNTINLUPA",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "AVIDA Altura Tower 2",
        ADDRESS: "SOUTH PARK DISTIRCT BRGY NATIONAL ROAD ALABANG MUNTINLUPA",
        MUNICIPALITY: "MUNTINLUPA",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Vivant Flats",
        ADDRESS: "1120-1124 PARKWAY AVENUE FILINVEST CORPORATE CITY MUNTINLUPA CITY",
        MUNICIPALITY: "MUNTINLUPA",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Burgundy Mckinley Place",
        ADDRESS: "BURGUNDY MCKINLEY PLACE PACIFIC AVENUE ASIAWORLD BOULEVARD PARANAQUE CITY",
        MUNICIPALITY: "PARANAQUE",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Azure Positano Tower",
        ADDRESS: "KM 16 WEST SERVICE ROAD SOUTH SUPER HIGHWAY BRGY MARCELO GREEN PARANAQUE CITY",
        MUNICIPALITY: "PARANAQUE",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Azure Rio Tower",
        ADDRESS: "KM 16 WEST SERVICE ROAD SOUTH SUPER HIGHWAY BRGY MARCELO GREEN PARANAQUE CITY",
        MUNICIPALITY: "PARANAQUE",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Azure Santorini Tower",
        ADDRESS: "KM 16 WEST SERVICE ROAD SOUTH SUPER HIGHWAY BRGY MARCELO GREEN PARANAQUE CITY",
        MUNICIPALITY: "PARANAQUE",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Azure Tropez Bldg",
        ADDRESS: "KM 16 WEST SERVICE ROAD SOUTH SUPER HIGHWAY BRGY MARCELO GREEN PARANAQUE CITY",
        MUNICIPALITY: "PARANAQUE",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Azure Miami Bldg",
        ADDRESS: "KM 16 WEST SERVICE ROAD SOUTH SUPER HIGHWAY BRGY MARCELO GREEN PARANAQUE CITY",
        MUNICIPALITY: "PARANAQUE",
        EXCLUSIVITY: "Non-Ex Only Provider"
    },
    {
        MDU: "Arista Place - Grande Building",
        ADDRESS: "JP RIZAL STREET BRGY SANTO NINO PARANAQUE CITY",
        MUNICIPALITY: "PARANAQUE",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Arista Place - Apex Building",
        ADDRESS: "JP RIZAL STREET BRGY SANTO NINO PARANAQUE CITY",
        MUNICIPALITY: "PARANAQUE",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Avida Sucat Tower 8",
        ADDRESS: "DR A SANTOS AVENUE BEGY SAN DIONISIO PARANAQUE",
        MUNICIPALITY: "PARANAQUE",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Amaia Steps Bicutan Aria A",
        ADDRESS: "DR A SANTOS AVENUE BRGY SAN ANTONIO PARANAQUE",
        MUNICIPALITY: "PARANAQUE",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Amaia Steps Bicutan Aria B",
        ADDRESS: "DR A SANTOS AVENUE BRGY SAN ANTONIO PARANAQUE",
        MUNICIPALITY: "PARANAQUE",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Amaia Steps Sucat Aria",
        ADDRESS: "WEST SERVICE ROAD BRGY SUNVALLEY PARANAQUE",
        MUNICIPALITY: "PARANAQUE",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Amaia Steps Sucat Blanca",
        ADDRESS: "WEST SERVICE ROAD BRGY SUNVALLEY PARANAQUE",
        MUNICIPALITY: "PARANAQUE",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Amaia Steps Sucat Clara",
        ADDRESS: "WEST SERVICE ROAD BRGY SUNVALLEY PARANAQUE",
        MUNICIPALITY: "PARANAQUE",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Amaia Steps Sucat Fidela",
        ADDRESS: "WEST SERVICE ROAD BRGY SUNVALLEY PARANAQUE",
        MUNICIPALITY: "PARANAQUE",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Bayshore Residences Cluster 1",
        ADDRESS: "BAYSHORE BLVD. PARANAQUE",
        MUNICIPALITY: "PARANAQUE",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Bayshore Residences Cluster 2",
        ADDRESS: "BAYSHORE BLVD. PARANAQUE",
        MUNICIPALITY: "PARANAQUE",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Bayshore Residences Cluster 3",
        ADDRESS: "BAYSHORE BLVD. PARANAQUE",
        MUNICIPALITY: "PARANAQUE",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Bayshore Residences Cluster 4",
        ADDRESS: "BAYSHORE BLVD. PARANAQUE",
        MUNICIPALITY: "PARANAQUE",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Bayshore Residences Cluster 5",
        ADDRESS: "BAYSHORE BLVD. PARANAQUE",
        MUNICIPALITY: "PARANAQUE",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Bayshore Residences Cluster 6",
        ADDRESS: "BAYSHORE BLVD. PARANAQUE",
        MUNICIPALITY: "PARANAQUE",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Bayshore Two Residences Cluster A",
        ADDRESS: "BAYSHORE BLVD. PARANAQUE",
        MUNICIPALITY: "PARANAQUE",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Bayshore Two Residences Cluster C",
        ADDRESS: "BAYSHORE BLVD. PARANAQUE",
        MUNICIPALITY: "PARANAQUE",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "SMDC Spring Residences Tower 1",
        ADDRESS: "DONA SOLEDAD AVE PARANAQUE",
        MUNICIPALITY: "PARANAQUE",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "SMDC Spring Residences Tower 2",
        ADDRESS: "DONA SOLEDAD AVE PARANAQUE",
        MUNICIPALITY: "PARANAQUE",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Field Residences Building 4",
        ADDRESS: "DR A SANTOS AVENUE BEGY SAN DIONISIO PARANAQUE",
        MUNICIPALITY: "PARANAQUE",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "One Palmtree Villas Cluster A",
        ADDRESS: "RESORT DR. NEWPORT CITY PASAY",
        MUNICIPALITY: "PASAY",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "One Palmtree Villas Cluster B",
        ADDRESS: "RESORT DR. NEWPORT CITY PASAY",
        MUNICIPALITY: "PASAY",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "One Palmtree Villas Cluster C",
        ADDRESS: "RESORT DR. NEWPORT CITY PASAY",
        MUNICIPALITY: "PASAY",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "The Palmtree Two at Newport City Cluster A",
        ADDRESS: "NEWPORT BOULEVARD VILLAMOR AIRBASE PASAY CITY",
        MUNICIPALITY: "PASAY",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "The Palmtree Two at Newport City Cluster B",
        ADDRESS: "NEWPORT BOULEVARD VILLAMOR AIRBASE PASAY CITY",
        MUNICIPALITY: "PASAY",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "The Palmtree Two at Newport City Cluster C",
        ADDRESS: "NEWPORT BOULEVARD VILLAMOR AIRBASE PASAY CITY",
        MUNICIPALITY: "PASAY",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "La Verti North Tower",
        ADDRESS: "DONADA STREET TAFT AVENUE PASAY CITY",
        MUNICIPALITY: "PASAY",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "101 Newport Blvd. Cluster 1",
        ADDRESS: "NEWPORT CITY PASAY",
        MUNICIPALITY: "PASAY",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "101 Newport Blvd. Cluster 2",
        ADDRESS: "NEWPORT CITY PASAY",
        MUNICIPALITY: "PASAY",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "101 Newport Blvd. Cluster 3",
        ADDRESS: "NEWPORT CITY PASAY",
        MUNICIPALITY: "PASAY",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "101 Newport Blvd. Cluster 4",
        ADDRESS: "NEWPORT CITY PASAY",
        MUNICIPALITY: "PASAY",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Breeze Residences",
        ADDRESS: "ROXAS BOULEVARD PASAY CITY",
        MUNICIPALITY: "PASAY",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "150 Newport Boulevard",
        ADDRESS: "NEWPORT BOULEVARD NEWPORT CITY VILLAMOR AIRBASE PASAY CITY",
        MUNICIPALITY: "PASAY",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "81 Newport Blvd. Cluster 1",
        ADDRESS: "NEWPORT BOULEVARD NEWPORT CITY VILLAMOR AIRBASE PASAY CITY",
        MUNICIPALITY: "PASAY",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "81 Newport Blvd. Cluster 2",
        ADDRESS: "NEWPORT BOULEVARD NEWPORT CITY VILLAMOR AIRBASE PASAY CITY",
        MUNICIPALITY: "PASAY",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "81 Newport Blvd. Cluster 3",
        ADDRESS: "NEWPORT BOULEVARD NEWPORT CITY VILLAMOR AIRBASE PASAY CITY",
        MUNICIPALITY: "PASAY",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "81 Newport Blvd. Cluster 4",
        ADDRESS: "NEWPORT BOULEVARD NEWPORT CITY VILLAMOR AIRBASE PASAY CITY",
        MUNICIPALITY: "PASAY",
        EXCLUSIVITY: "With Competitor"
    },
    {
        MDU: "81 Newport Blvd. Cluster 5",
        ADDRESS: "NEWPORT BOULEVARD NEWPORT CITY VILLAMOR AIRBASE PASAY CITY",
        MUNICIPALITY: "PASAY",
        EXCLUSIVITY: "With Competitor"
    },
    {
        MDU: "81 Newport Blvd. Cluster 6",
        ADDRESS: "NEWPORT BOULEVARD NEWPORT CITY VILLAMOR AIRBASE PASAY CITY",
        MUNICIPALITY: "PASAY",
        EXCLUSIVITY: "With Competitor"
    },
    {
        MDU: "The Radiance Residences North Tower",
        ADDRESS: "ROXAS BOULEVARD PASAY CITY",
        MUNICIPALITY: "PASAY",
        EXCLUSIVITY: "Non-Ex Only Provider"
    },
    {
        MDU: "The Radiance Residences South Tower",
        ADDRESS: "ROXAS BOULEVARD PASAY CITY",
        MUNICIPALITY: "PASAY",
        EXCLUSIVITY: "Non-Ex Only Provider"
    },
    {
        MDU: "Shore 2 Residences Tower 1",
        ADDRESS: "ROXAS BOULEVARD PASAY CITY",
        MUNICIPALITY: "PASAY",
        EXCLUSIVITY: "Non-Ex Only Provider"
    },
    {
        MDU: "Vimana Verde Building A",
        ADDRESS: "SAINT MARTIN STREET ORANBO PASIG",
        MUNICIPALITY: "PASIG",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Vimana Verde Building B",
        ADDRESS: "SAINT MARTIN STREET ORANBO PASIG",
        MUNICIPALITY: "PASIG",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Vimana Verde Building C",
        ADDRESS: "SAINT MARTIN STREET ORANBO PASIG",
        MUNICIPALITY: "PASIG",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Eton Emerald",
        ADDRESS: "GARNET STEET CORNER EMERALD AVENUE ORTIGAS CENTER PASIG",
        MUNICIPALITY: "PASIG",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Arezzo Place Residences Building 1",
        ADDRESS: "ALFONSO SANDOVAL AVENUE PASIG CITY",
        MUNICIPALITY: "PASIG",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Arezzo Place Residences Building 2",
        ADDRESS: "ALFONSO SANDOVAL AVENUE PASIG CITY",
        MUNICIPALITY: "PASIG",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Arezzo Place Residences Building 3",
        ADDRESS: "ALFONSO SANDOVAL AVENUE PASIG CITY",
        MUNICIPALITY: "PASIG",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Arezzo Place Residences Building 4",
        ADDRESS: "ALFONSO SANDOVAL AVENUE PASIG CITY",
        MUNICIPALITY: "PASIG",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Arezzo Place Residences Building 5",
        ADDRESS: "ALFONSO SANDOVAL AVENUE PASIG CITY",
        MUNICIPALITY: "PASIG",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Arezzo Place Residences Building 6",
        ADDRESS: "ALFONSO SANDOVAL AVENUE PASIG CITY",
        MUNICIPALITY: "PASIG",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Arezzo Place Residences Building 7",
        ADDRESS: "ALFONSO SANDOVAL AVENUE PASIG CITY",
        MUNICIPALITY: "PASIG",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Arezzo Place Residences Building 8",
        ADDRESS: "ALFONSO SANDOVAL AVENUE PASIG CITY",
        MUNICIPALITY: "PASIG",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Arezzo Place Residences Building 9",
        ADDRESS: "ALFONSO SANDOVAL AVENUE PASIG CITY",
        MUNICIPALITY: "PASIG",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Arezzo Place Residences Building 10",
        ADDRESS: "ALFONSO SANDOVAL AVENUE PASIG CITY",
        MUNICIPALITY: "PASIG",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Arezzo Place Residences Building 11",
        ADDRESS: "ALFONSO SANDOVAL AVENUE PASIG CITY",
        MUNICIPALITY: "PASIG",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Arezzo Place Residences Building 12",
        ADDRESS: "ALFONSO SANDOVAL AVENUE PASIG CITY",
        MUNICIPALITY: "PASIG",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Arezzo Place Residences Building 14",
        ADDRESS: "ALFONSO SANDOVAL AVENUE PASIG CITY",
        MUNICIPALITY: "PASIG",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Arezzo Place Residences Building 15",
        ADDRESS: "ALFONSO SANDOVAL AVENUE PASIG CITY",
        MUNICIPALITY: "PASIG",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Arezzo Place Residences Building 16",
        ADDRESS: "ALFONSO SANDOVAL AVENUE PASIG CITY",
        MUNICIPALITY: "PASIG",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Arezzo Place Residences Building 17",
        ADDRESS: "ALFONSO SANDOVAL AVENUE PASIG CITY",
        MUNICIPALITY: "PASIG",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Arezzo Place Residences Building 18",
        ADDRESS: "ALFONSO SANDOVAL AVENUE PASIG CITY",
        MUNICIPALITY: "PASIG",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Arezzo Place Residences Building 19",
        ADDRESS: "ALFONSO SANDOVAL AVENUE PASIG CITY",
        MUNICIPALITY: "PASIG",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Arezzo Place Residences Building 20",
        ADDRESS: "ALFONSO SANDOVAL AVENUE PASIG CITY",
        MUNICIPALITY: "PASIG",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Arezzo Place Residences Building 21",
        ADDRESS: "ALFONSO SANDOVAL AVENUE PASIG CITY",
        MUNICIPALITY: "PASIG",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Arezzo Place Residences Building 22",
        ADDRESS: "ALFONSO SANDOVAL AVENUE PASIG CITY",
        MUNICIPALITY: "PASIG",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Arezzo Place Residences Building 22",
        ADDRESS: "ALFONSO SANDOVAL AVENUE PASIG CITY",
        MUNICIPALITY: "PASIG",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Grand Emerald Tower",
        ADDRESS: "F ORTIGAS CORNER RUBY AND GARNET STREETS ORTIGAS CENTER PASIG CITY",
        MUNICIPALITY: "PASIG",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Sapphire Bloc Residences Tower 1",
        ADDRESS: "SAPPHIRE ROAD BRGY SAN ANTONIO ORTIGAS CENTER PASIG CITY",
        MUNICIPALITY: "PASIG",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Sapphire Bloc Residences West Tower",
        ADDRESS: "SAPPHIRE ROAD BRGY SAN ANTONIO ORTIGAS CENTER PASIG CITY",
        MUNICIPALITY: "PASIG",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Capri Oasis Pasig Vento Building",
        ADDRESS: "DR SIXTO AVENUE BRGY MAYBUNGA PASIG CITY",
        MUNICIPALITY: "PASIG",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "Sorrento Oasis Building J",
        ADDRESS: "5 C RAYMUNDO AVENUE PASIG CITY",
        MUNICIPALITY: "PASIG",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "Sorrento Oasis Building O",
        ADDRESS: "5 C RAYMUNDO AVENUE PASIG CITY",
        MUNICIPALITY: "PASIG",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "Sorrento Oasis Building Q",
        ADDRESS: "5 C RAYMUNDO AVENUE PASIG CITY",
        MUNICIPALITY: "PASIG",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "One Spatial Condominium Regents Building",
        ADDRESS: "AMANG RODRIGUEZ AVENUE BRGY DELA PAZ PASIG CITY",
        MUNICIPALITY: "PASIG",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "One Spatial Condominium Richmond Building",
        ADDRESS: "AMANG RODRIGUEZ AVENUE BRGY DELA PAZ PASIG CITY",
        MUNICIPALITY: "PASIG",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "One Spatial Condominium Victoria Building",
        ADDRESS: "AMANG RODRIGUEZ AVENUE BRGY DELA PAZ PASIG CITY",
        MUNICIPALITY: "PASIG",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "Bali Oasis Phase 2 Banjar Bldg.",
        ADDRESS: "SANTOLAN PASIG CITY",
        MUNICIPALITY: "PASIG",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "The Orchard Tower Tower 1",
        ADDRESS: "A RODRIGUEZ MANGGAHAN PASIG CITY",
        MUNICIPALITY: "PASIG",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "Kasara Urban Resort Residences Tower 1",
        ADDRESS: "UGONG PASIG CITY",
        MUNICIPALITY: "PASIG",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "Kasara Urban Resort Residences Tower 2",
        ADDRESS: "UGONG PASIG CITY",
        MUNICIPALITY: "PASIG",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "Amaia Steps Pasig Aria",
        ADDRESS: "EUSEBIO SAN MIGUEL PASIG",
        MUNICIPALITY: "PASIG",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Amaia Steps Pasig Esperenza",
        ADDRESS: "EUSEBIO SAN MIGUEL PASIG",
        MUNICIPALITY: "PASIG",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "The Sandstone at Portico Residences Tower 1",
        ADDRESS: "CAPT. HENRY JAVIER STREET BRGY ORANBO PASIG CITY",
        MUNICIPALITY: "PASIG",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "La Breza",
        ADDRESS: "MOTHER IGNACIA STREET QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Sofia Bellevue Medina",
        ADDRESS: "CAPITOL HILLS MATANDANG BALARA QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Sofia Bellevue Somerset",
        ADDRESS: "CAPITOL HILLS MATANDANG BALARA QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Sofia Bellevue Ardmore",
        ADDRESS: "CAPITOL HILLS MATANDANG BALARA QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Sofia Bellevue Woodridge",
        ADDRESS: "CAPITOL HILLS MATANDANG BALARA QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Sofia Bellevue New Port",
        ADDRESS: "CAPITOL HILLS MATANDANG BALARA QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Neopolitan Condominium",
        ADDRESS: "GREATER LAGRO FAIRVIEW QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "Sun Residences Tower 1",
        ADDRESS: "ESPANA BOULEVARD CORNER MAYON STREET BRGY STA TERESITA QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Sun Residences Tower 2",
        ADDRESS: "ESPANA BOULEVARD CORNER MAYON STREET BRGY STA TERESITA QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Manhattan Heights Building A",
        ADDRESS: "GENERAL ROXAS STREET ARANETA CENTER COMMERCIAL QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Manhattan Heights Building B",
        ADDRESS: "GENERAL ROXAS STREET ARANETA CENTER COMMERCIAL QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Manhattan Heights Building C",
        ADDRESS: "GENERAL ROXAS STREET ARANETA CENTER COMMERCIAL QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Manhattan Heights Building D",
        ADDRESS: "GENERAL ROXAS STREET ARANETA CENTER COMMERCIAL QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Olympic Heights 1",
        ADDRESS: "EASTWOOD CITY LIBIS QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Olympic Heights 2",
        ADDRESS: "EASTWOOD CITY LIBIS QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Olympic Heights 3",
        ADDRESS: "EASTWOOD CITY LIBIS QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "One Orchard 1",
        ADDRESS: "EASTWOOD CITY LIBIS QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "One Orchard 2",
        ADDRESS: "EASTWOOD CITY LIBIS QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "One Orchard 3",
        ADDRESS: "EASTWOOD CITY LIBIS QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Stellar Place - Magna Building",
        ADDRESS: "A VISAYAS AVENUE BRGY BAHAY TORO QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Stellar Place - Vega Building",
        ADDRESS: "A VISAYAS AVENUE BRGY BAHAY TORO QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Stellar Place -Claris Building",
        ADDRESS: "A VISAYAS AVENUE BRGY BAHAY TORO QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Le Grande 2",
        ADDRESS: "UNION STREET BRGY BAGONG BAYAN QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Le Grande 3",
        ADDRESS: "EASTWOOD PALM TREE AVENUE BAGUMBAYAN QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Manhattan Parkview 1",
        ADDRESS: "GENERAL ROXAS STREET ARANETA CENTER COMMERCIAL QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Manhattan Parkview 2",
        ADDRESS: "GENERAL ROXAS STREET ARANETA CENTER COMMERCIAL QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Manhattan Parkview 3",
        ADDRESS: "GENERAL ROXAS STREET ARANETA CENTER COMMERCIAL QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Manhattan Plaza Tower 1",
        ADDRESS: "GENERAL ROXAS STREET ARANETA CENTER COMMERCIAL QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "80 Road 13 Residences",
        ADDRESS: "PROJECT 6 BRGY PAG ASA QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "Avida Vita Tower 1",
        ADDRESS: "VERTIS NORTH BRGY BAGONG PAG ASA QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "Avida Vita Tower 2",
        ADDRESS: "VERTIS NORTH BRGY BAGONG PAG ASA QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Avida Vita Tower 3",
        ADDRESS: "VERTIS NORTH BRGY BAGONG PAG ASA QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Magnolia Residences Tower A",
        ADDRESS: "N DOMINGO QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Magnolia Residences Tower B",
        ADDRESS: "N DOMINGO QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Magnolia Residences Tower C",
        ADDRESS: "N DOMINGO QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "The Residences at Commonwealth Osmena West",
        ADDRESS: "DON ANTONIO DRIVE MATANDANG BALARA QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "The Residences at Commonwealth Osmena East",
        ADDRESS: "DON ANTONIO DRIVE MATANDANG BALARA QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "The Residences at Commonwealth Quezon North",
        ADDRESS: "DON ANTONIO DRIVE MATANDANG BALARA QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "The Residences at Commonwealth Roxas West",
        ADDRESS: "DON ANTONIO DRIVE MATANDANG BALARA QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "The Residences at Commonwealth Roxas East",
        ADDRESS: "DON ANTONIO DRIVE MATANDANG BALARA QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Trees Residences Tower 1",
        ADDRESS: "PASONG PUTIK NOVALICHES QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "Trees Residences Tower 5",
        ADDRESS: "PASONG PUTIK NOVALICHES QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "Trees Residences Tower 7",
        ADDRESS: "PASONG PUTIK NOVALICHES QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "Trees Residences Tower 8",
        ADDRESS: "PASONG PUTIK NOVALICHES QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "Trees Residences Tower 9",
        ADDRESS: "PASONG PUTIK NOVALICHES QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "Trees Residences Tower 10",
        ADDRESS: "PASONG PUTIK NOVALICHES QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "Trees Residences Tower 11",
        ADDRESS: "PASONG PUTIK NOVALICHES QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "Trees Residences Tower 12",
        ADDRESS: "PASONG PUTIK NOVALICHES QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "Trees Residences Tower 15",
        ADDRESS: "PASONG PUTIK NOVALICHES QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "Trees Residences Tower 16",
        ADDRESS: "PASONG PUTIK NOVALICHES QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "Trees Residences Tower 21",
        ADDRESS: "PASONG PUTIK NOVALICHES QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "One Eastwood Avenue Tower 1",
        ADDRESS: "EASTWOOD CITY LIBIS QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "One Eastwood Avenue Tower 2",
        ADDRESS: "EASTWOOD CITY LIBIS QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "Cityland North Residences",
        ADDRESS: "PROJECT 7 EDSA QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "Suntrust Shanata Tower 4",
        ADDRESS: "QUIRINO HIGHWAY NOVALICHES QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "Suntrust Shanata Tower 6",
        ADDRESS: "QUIRINO HIGHWAY NOVALICHES QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "Suntrust Shanata Tower 11",
        ADDRESS: "QUIRINO HIGHWAY NOVALICHES QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "Avida Astrea Tower 1",
        ADDRESS: "QUIRINO HIGHWAY NOVALICHES QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Suntrust Asmara Tower 1",
        ADDRESS: "E RODRIGUEZ AVENUE NEW MANILA QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "Suntrust Asmara Tower 2",
        ADDRESS: "E RODRIGUEZ AVENUE NEW MANILA QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "Golfhill Gardens Condominium Cluster 1",
        ADDRESS: "CAPITOL HILLS MATANDANG BALARA QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "Golfhill Gardens Condominium Cluster 2",
        ADDRESS: "CAPITOL HILLS MATANDANG BALARA QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "Golfhill Gardens Condominium Cluster 3",
        ADDRESS: "CAPITOL HILLS MATANDANG BALARA QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "Golfhill Gardens Condominium Cluster 4",
        ADDRESS: "CAPITOL HILLS MATANDANG BALARA QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "Golfhill Gardens Condominium Cluster 5",
        ADDRESS: "CAPITOL HILLS MATANDANG BALARA QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "Golfhill Gardens Condominium Cluster 6",
        ADDRESS: "CAPITOL HILLS MATANDANG BALARA QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "Fern at Grass Residences Tower 4",
        ADDRESS: "BAGO BANTAY QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "Fern at Grass Residences Tower 5",
        ADDRESS: "BAGO BANTAY QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "AVIDA Tower Cloverleaf Tower 1",
        ADDRESS: "CLOVERLEAF A BONIFACIO BALINTAWAK QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "Alveo High Park Residences Tower 1",
        ADDRESS: "VERTIS NORTH NORTH TRIANGLE QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "Suntrust Garden Aurora Cluster 1",
        ADDRESS: "180 AURORA BOULEVARD SAN JUAN",
        MUNICIPALITY: "SAN JUAN",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "Suntrust Garden Aurora Cluster 2",
        ADDRESS: "180 AURORA BOULEVARD SAN JUAN",
        MUNICIPALITY: "SAN JUAN",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "Little Baguio Terraces  Tower 1",
        ADDRESS: "N. DOMINGO AURORA BOULEVARD SAN JUAN CITY",
        MUNICIPALITY: "SAN JUAN",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Little Baguio Terraces Tower 2",
        ADDRESS: "N. DOMINGO AURORA BOULEVARD SAN JUAN CITY",
        MUNICIPALITY: "SAN JUAN",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Little Baguio Terraces Tower 4",
        ADDRESS: "N. DOMINGO AURORA BOULEVARD SAN JUAN CITY",
        MUNICIPALITY: "SAN JUAN",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Little Baguio Terraces Tower 3",
        ADDRESS: "N. DOMINGO AURORA BOULEVARD SAN JUAN CITY",
        MUNICIPALITY: "SAN JUAN",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Greenhills Heights Cluster A",
        ADDRESS: "PINAGLABANAN SAN JUAN CITY",
        MUNICIPALITY: "SAN JUAN",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Greenhills Heights Cluster B",
        ADDRESS: "PINAGLABANAN SAN JUAN CITY",
        MUNICIPALITY: "SAN JUAN",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Greenhills Heights Cluster C",
        ADDRESS: "PINAGLABANAN SAN JUAN CITY",
        MUNICIPALITY: "SAN JUAN",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Greenhills Heights Cluster D",
        ADDRESS: "PINAGLABANAN SAN JUAN CITY",
        MUNICIPALITY: "SAN JUAN",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "W Tower",
        ADDRESS: "39TH STREET NORTH BONIFACIO TRIANGLE BONIFACIO GLOBAL CITY TAGUIG",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Woodridge Residences",
        ADDRESS: "UPPER MCKINLEY RD TAGUIG",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "8 Forbestown",
        ADDRESS: "WEST CRESENT PARK ROAD FORBES TOWN CENTER BONIFACIO GLOBAL TAGUIG CITY",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "Venice Luxury Alessandro Building",
        ADDRESS: "8 VENETIA DRIVE MCKINLEY HILL FORT BONIFACIO TAGUIG CITY",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "Venice Luxury Bellini Building",
        ADDRESS: "8 VENETIA DRIVE MCKINLEY HILL FORT BONIFACIO TAGUIG CITY",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "Venice Luxury Carusso Building",
        ADDRESS: "8 VENETIA DRIVE MCKINLEY HILL FORT BONIFACIO TAGUIG CITY",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "Venice Luxury Domenico Building",
        ADDRESS: "8 VENETIA DRIVE MCKINLEY HILL FORT BONIFACIO TAGUIG CITY",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "Venice Luxury Emmanuel Building",
        ADDRESS: "8 VENETIA DRIVE MCKINLEY HILL FORT BONIFACIO TAGUIG CITY",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "Venice Luxury Florenzo Building",
        ADDRESS: "8 VENETIA DRIVE MCKINLEY HILL FORT BONIFACIO TAGUIG CITY",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "Venice Luxury Giovanni Building",
        ADDRESS: "8 VENETIA DRIVE MCKINLEY HILL FORT BONIFACIO TAGUIG CITY",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "Trion Tower 1",
        ADDRESS: "8TH AVENUE CORNER MCKINLEY PARKWAY BRGY FORT BONIFACIO TAGUIG CITY",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Trion Tower 2",
        ADDRESS: "8TH AVENUE CORNER MCKINLEY PARKWAY BRGY FORT BONIFACIO TAGUIG CITY",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Trion Tower 3",
        ADDRESS: "8TH AVENUE CORNER MCKINLEY PARKWAY BRGY FORT BONIFACIO TAGUIG CITY",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: " Pacific Plaza South Tower",
        ADDRESS: "4TH AVENUE WEST CRESENT PARK FORT BONIFACIO GLOBAL CITY TAGUIG",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Pacific Plaza North Tower",
        ADDRESS: "4TH AVENUE WEST CRESENT PARK FORT BONIFACIO GLOBAL CITY TAGUIG",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Tuscany Tower 1",
        ADDRESS: "110 UPPER MCKINLEY ROAD MCKINLEY TOWN CENTER FORT BONIFACIO TAGUIG CITY",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Tuscany Tower 2",
        ADDRESS: "110 UPPER MCKINLEY ROAD MCKINLEY TOWN CENTER FORT BONIFACIO TAGUIG CITY",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Tuscany Tower 3",
        ADDRESS: "110 UPPER MCKINLEY ROAD MCKINLEY TOWN CENTER FORT BONIFACIO TAGUIG CITY",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Tuscany Tower 4",
        ADDRESS: "110 UPPER MCKINLEY ROAD MCKINLEY TOWN CENTER FORT BONIFACIO TAGUIG CITY",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Tuscany Tower 5",
        ADDRESS: "110 UPPER MCKINLEY ROAD MCKINLEY TOWN CENTER FORT BONIFACIO TAGUIG CITY",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Tuscany Tower 6",
        ADDRESS: "110 UPPER MCKINLEY ROAD MCKINLEY TOWN CENTER FORT BONIFACIO TAGUIG CITY",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Tuscany Tower 7",
        ADDRESS: "110 UPPER MCKINLEY ROAD MCKINLEY TOWN CENTER FORT BONIFACIO TAGUIG CITY",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Morgan Suites Tower 1",
        ADDRESS: "FLORENCE WAY MCKINLEY HILL VILLAGE TAGUIG CITY",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Morgan Suites Tower 2",
        ADDRESS: "FLORENCE WAY MCKINLEY HILL VILLAGE TAGUIG CITY",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Morgan Suites Tower 3",
        ADDRESS: "FLORENCE WAY MCKINLEY HILL VILLAGE TAGUIG CITY",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Grace Residences Tower 1",
        ADDRESS: "LEVI MARIANO TAGUIG CITY",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Grace Residences Tower 2",
        ADDRESS: "LEVI MARIANO TAGUIG CITY",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "with competitor"
    },
    {
        MDU: "Avida Cityflex Towers Tower 1",
        ADDRESS: "7TH AVE CORNER LANE T NORTH BONIFACIO BONIFACIO GLOBAL CITY TAGUIG",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "Avida Cityflex Towers Tower 2",
        ADDRESS: "7TH AVE CORNER LANE T NORTH BONIFACIO BONIFACIO GLOBAL CITY TAGUIG",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "Non-Ex Only Provider"
    },
    {
        MDU: "One Maridien",
        ADDRESS: "26TH STREET BONIFACIO GLOBAL CITY TAGUIG",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "Two Maridien",
        ADDRESS: "26TH STREET BONIFACIO GLOBAL CITY TAGUIG",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "Non-Ex Only Provider"
    },
    {
        MDU: "Viceroy Residences Tower 1",
        ADDRESS: "MCKINLEY HILL TAGUIG CITY",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "With Competitor"
    },
    {
        MDU: "Viceroy Residences Tower 2",
        ADDRESS: "MCKINLEY HILL TAGUIG CITY",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "With Competitor"
    },
    {
        MDU: "Viceroy Residences Tower 3",
        ADDRESS: "MCKINLEY HILL TAGUIG CITY",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "With Competitor"
    },
    {
        MDU: "Arbor Lanes Block 1 West Willow",
        ADDRESS: "NEXUS STREET ARCA SOUTH WESTERN BICUTAN TAGUIG",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "Arbor Lanes Block 1 East Willow",
        ADDRESS: "NEXUS STREET ARCA SOUTH WESTERN BICUTAN TAGUIG",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "Arbor Lanes Block 2 West Pine",
        ADDRESS: "NEXUS STREET ARCA SOUTH WESTERN BICUTAN TAGUIG",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "Arbor Lanes Block 3 Building A",
        ADDRESS: "NEXUS STREET ARCA SOUTH WESTERN BICUTAN TAGUIG",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "Arbor Lanes Block 3 Building B",
        ADDRESS: "NEXUS STREET ARCA SOUTH WESTERN BICUTAN TAGUIG",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "Avida Tower 34th Street Tower 1",
        ADDRESS: "34TH STREET CORNER 11TH AVE AND LANE T BGC TAGUIG",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "Avida Tower 34th Street Tower 2",
        ADDRESS: "34TH STREET CORNER 11TH AVE AND LANE T BGC TAGUIG",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "Avida Tower Verte",
        ADDRESS: "34TH STREET CORNER 11TH AVE AND LANE T BGC TAGUIG",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "Avida Towers One Union Place Tower 1",
        ADDRESS: "ARCA SOUTH WESTERN BICUTAN TAGUIG",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "Avida Towers One Union Place Tower 2",
        ADDRESS: "ARCA SOUTH WESTERN BICUTAN TAGUIG",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "Avida Towers One Union Place Tower 3",
        ADDRESS: "ARCA SOUTH WESTERN BICUTAN TAGUIG",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "The Florence Residences Tower 1",
        ADDRESS: "MCKINLEY HILL TAGUIG CITY",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "With Competitor"
    },
    {
        MDU: "The Florence Residences Tower 2",
        ADDRESS: "MCKINLEY HILL TAGUIG CITY",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "With Competitor"
    },
    {
        MDU: "The Florence Residences Tower 3",
        ADDRESS: "MCKINLEY HILL TAGUIG CITY",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "With Competitor"
    },
    {
        MDU: "Uptown Ritz Residences",
        ADDRESS: "36TH STREET BONIFACIO GLOBAL CITY TAGUIG",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "With Competitor"
    },
    {
        MDU: "St. Moritz private Estate Cluster 1",
        ADDRESS: "LE GRAND AVENUE MCKINLEY HILL TAGUIG",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "With Competitor"
    },
    {
        MDU: "St. Moritz private Estate Cluster 2",
        ADDRESS: "LE GRAND AVENUE MCKINLEY HILL TAGUIG",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "With Competitor"
    },
    {
        MDU: "One Uptown Residences Tower 1",
        ADDRESS: "36TH STREET BONIFACIO GLOBAL CITY TAGUIG",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "One Uptown Residences Tower 2",
        ADDRESS: "36TH STREET BONIFACIO GLOBAL CITY TAGUIG",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "One Uptown Residences Tower 3",
        ADDRESS: "36TH STREET BONIFACIO GLOBAL CITY TAGUIG",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "Verve Residences Tower 1",
        ADDRESS: "26TH STREET BONIFACIO GLOBAL CITY TAGUIG",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "Verve Residences Tower 2",
        ADDRESS: "26TH STREET BONIFACIO GLOBAL CITY TAGUIG",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "Uptown Parksuite Tower 1",
        ADDRESS: "BGC TAGUIG",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "Uptown Parksuite Tower 2",
        ADDRESS: "BGC TAGUIG",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "The Montane Tower 1",
        ADDRESS: "8TH AVE 35TH STREET CORNER BGC TAGUIG",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "The Veranda Residences West Tower",
        ADDRESS: "BGC TAGUIG",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "The Veranda Residences South Tower",
        ADDRESS: "BGC TAGUIG",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "Avida Turf Residences Tower 1",
        ADDRESS: "BGC TAGUIG",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "Avida Turf Residences Tower 2",
        ADDRESS: "BGC TAGUIG",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "Avida Towers Vireo Tower 1",
        ADDRESS: "515-512 SIRLOIN BGC TAGUIG",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "Torre Sur Condominium",
        ADDRESS: "ALABANG ZAPOTE ROAD BRGY PAMPLONA LAS PIÑAS CITY",
        MUNICIPALITY: "LAS PIÑAS",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "Amaia Steps Alabang Aria",
        ADDRESS: "ALABANG ZAPOTE ROAD ALMANZA DOS LAS PIÑAS CITY",
        MUNICIPALITY: "LAS PIÑAS",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Amaia Steps Alabang Blanca",
        ADDRESS: "ALABANG ZAPOTE ROAD ALMANZA DOS LAS PIÑAS CITY",
        MUNICIPALITY: "LAS PIÑAS",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Amaia Steps Alabang Clara",
        ADDRESS: "ALABANG ZAPOTE ROAD ALMANZA DOS LAS PIÑAS CITY",
        MUNICIPALITY: "LAS PIÑAS",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "SMDC South Residences Tower 1",
        ADDRESS: "VIOLET STREET LAS PIÑAS CITY",
        MUNICIPALITY: "LAS PIÑAS",
        EXCLUSIVITY: "With Competitor"
    },
    {
        MDU: "SMDC South Residences Tower 2",
        ADDRESS: "VIOLET STREET LAS PIÑAS CITY",
        MUNICIPALITY: "LAS PIÑAS",
        EXCLUSIVITY: "With Competitor"
    },
    {
        MDU: "SMDC South Residences Tower 3",
        ADDRESS: "VIOLET STREET LAS PIÑAS CITY",
        MUNICIPALITY: "LAS PIÑAS",
        EXCLUSIVITY: "With Competitor"
    },
    {
        MDU: "SMDC South Residences Tower 4",
        ADDRESS: "VIOLET STREET LAS PIÑAS CITY",
        MUNICIPALITY: "LAS PIÑAS",
        EXCLUSIVITY: "With Competitor"
    },
    {
        MDU: "Cityland One Premiere",
        ADDRESS: "ALABANG ZAPOTE ROAD BRGY PAMPLONA LAS PIÑAS CITY",
        MUNICIPALITY: "LAS PIÑAS",
        EXCLUSIVITY: "Non-Exclusive (Only Provider)"
    },
    {
        MDU: "L' Oasis Condominium Tower 2",
        ADDRESS: "BARITAN MALABON CITY",
        MUNICIPALITY: "MALABON",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "L' Oasis Condominium Tower 3",
        ADDRESS: "BARITAN MALABON CITY",
        MUNICIPALITY: "MALABON",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "L' Oasis Condominium Tower 4",
        ADDRESS: "BARITAN MALABON CITY",
        MUNICIPALITY: "MALABON",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "L' Oasis Condominium Tower 5",
        ADDRESS: "BARITAN MALABON CITY",
        MUNICIPALITY: "MALABON",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "L' Oasis Condominium Tower 6",
        ADDRESS: "BARITAN MALABON CITY",
        MUNICIPALITY: "MALABON",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "AVIDA Towers Riala Tower 1",
        ADDRESS: "JOSE DEL MAR STREET CEBU IT PARK APAS LAHUG",
        MUNICIPALITY: "CEBU CITY",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "AVIDA Towers Riala Tower 2",
        ADDRESS: "JOSE DEL MAR STREET CEBU IT PARK APAS LAHUG",
        MUNICIPALITY: "CEBU CITY",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "AVIDA Towers Davao Tower 1",
        ADDRESS: "CM RECTO AVENUE POBLACION DISTRICT DAVAO CITY",
        MUNICIPALITY: "DAVAO CITY",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "AVIDA Towers Davao Tower 2",
        ADDRESS: "CM RECTO AVENUE POBLACION DISTRICT DAVAO CITY",
        MUNICIPALITY: "DAVAO CITY",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Wind Residences Tower 1",
        ADDRESS: "AGUINALDO HIGHWAY MAHARLIKA WEST TAGAYTAY CITY",
        MUNICIPALITY: "TAGAYTAY",
        EXCLUSIVITY: "With Competitor"
    },
    {
        MDU: "Wind Residences Tower 2",
        ADDRESS: "AGUINALDO HIGHWAY MAHARLIKA WEST TAGAYTAY CITY",
        MUNICIPALITY: "TAGAYTAY",
        EXCLUSIVITY: "With Competitor"
    },
    {
        MDU: "SMDC Cool Suites Tower A",
        ADDRESS: "AGUINALDO HIGHWAY MAHARLIKA WEST TAGAYTAY CITY",
        MUNICIPALITY: "TAGAYTAY",
        EXCLUSIVITY: "With Competitor"
    },
    {
        MDU: "SMDC Cool Suites Tower B",
        ADDRESS: "AGUINALDO HIGHWAY MAHARLIKA WEST TAGAYTAY CITY",
        MUNICIPALITY: "TAGAYTAY",
        EXCLUSIVITY: "With Competitor"
    },
    {
        MDU: "AVIDA Atria Storeys 1",
        ADDRESS: "DONATO PISON AVENUE ATRIA PARK DISTRICT BRGY SAN RAFAEL MANDURRIAO ILOILO CITY",
        MUNICIPALITY: "ILOILO CITY",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "AVIDA Atria Tower 1",
        ADDRESS: "DONATO PISON AVENUE ATRIA PARK DISTRICT BRGY SAN RAFAEL MANDURRIAO ILOILO CITY",
        MUNICIPALITY: "ILOILO CITY",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Amaia Steps Mandaue Tower 1",
        ADDRESS: "PLARIDEL STREET UMAPAD MANDAUE CEBU",
        MUNICIPALITY: "CEBU CITY",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Amaia Steps Bacolod Tower 1",
        ADDRESS: "LACSON STREET BACOLOD",
        MUNICIPALITY: "BACOLOD",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Arterra Residences Tower 1",
        ADDRESS: "PUNTA ENGAÑO ROAD MACTAN LAPU-LAPU CITY CEBU",
        MUNICIPALITY: "CEBU CITY",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Seawind Residences Building 1",
        ADDRESS: "KM 11 BUHANGIN PROPER SASA DAVAO CITY",
        MUNICIPALITY: "DAVAO CITY",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "Seawind Residences Building 2",
        ADDRESS: "KM 11 BUHANGIN PROPER SASA DAVAO CITY",
        MUNICIPALITY: "DAVAO CITY",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "Seawind Residences Building 3",
        ADDRESS: "KM 11 BUHANGIN PROPER SASA DAVAO CITY",
        MUNICIPALITY: "DAVAO CITY",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "Seawind Residences Building 4",
        ADDRESS: "KM 11 BUHANGIN PROPER SASA DAVAO CITY",
        MUNICIPALITY: "DAVAO CITY",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "Seawind Residences Building 5",
        ADDRESS: "KM 11 BUHANGIN PROPER SASA DAVAO CITY",
        MUNICIPALITY: "DAVAO CITY",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "Amani Grand Residences Building 1",
        ADDRESS: "MACTAN LAPU-LAPU CITY CEBU",
        MUNICIPALITY: "CEBU CITY",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Amaia Steps Nuvali Blanca A",
        ADDRESS: "WEST CONSERVATION AVENUE NUVALI CANLUBANG CALAMBA LAGUNA",
        MUNICIPALITY: "LAGUNA",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Amaia Steps Nuvali Blanca B",
        ADDRESS: "WEST CONSERVATION AVENUE NUVALI CANLUBANG CALAMBA LAGUNA",
        MUNICIPALITY: "LAGUNA",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Amaia Steps Nuvali Blanca C",
        ADDRESS: "WEST CONSERVATION AVENUE NUVALI CANLUBANG CALAMBA LAGUNA",
        MUNICIPALITY: "LAGUNA",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Amaia Steps Nuvali Blanca D",
        ADDRESS: "WEST CONSERVATION AVENUE NUVALI CANLUBANG CALAMBA LAGUNA",
        MUNICIPALITY: "LAGUNA",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Amaia Steps Nuvali Aria A",
        ADDRESS: "WEST CONSERVATION AVENUE NUVALI CANLUBANG CALAMBA LAGUNA",
        MUNICIPALITY: "LAGUNA",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Amaia Steps Nuvali Aria B",
        ADDRESS: "WEST CONSERVATION AVENUE NUVALI CANLUBANG CALAMBA LAGUNA",
        MUNICIPALITY: "LAGUNA",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Amaia Steps Nuvali Aria C",
        ADDRESS: "WEST CONSERVATION AVENUE NUVALI CANLUBANG CALAMBA LAGUNA",
        MUNICIPALITY: "LAGUNA",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Amaia Steps Nuvali Aria D",
        ADDRESS: "WEST CONSERVATION AVENUE NUVALI CANLUBANG CALAMBA LAGUNA",
        MUNICIPALITY: "LAGUNA",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Amaia Steps Nuvali Clara A",
        ADDRESS: "WEST CONSERVATION AVENUE NUVALI CANLUBANG CALAMBA LAGUNA",
        MUNICIPALITY: "LAGUNA",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Amaia Steps Nuvali Clara B",
        ADDRESS: "WEST CONSERVATION AVENUE NUVALI CANLUBANG CALAMBA LAGUNA",
        MUNICIPALITY: "LAGUNA",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Amaia Steps Nuvali Delicia A",
        ADDRESS: "WEST CONSERVATION AVENUE NUVALI CANLUBANG CALAMBA LAGUNA",
        MUNICIPALITY: "LAGUNA",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Amaia Steps Nuvali Delicia B",
        ADDRESS: "WEST CONSERVATION AVENUE NUVALI CANLUBANG CALAMBA LAGUNA",
        MUNICIPALITY: "LAGUNA",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Amaia Steps Nuvali Delicia C",
        ADDRESS: "WEST CONSERVATION AVENUE NUVALI CANLUBANG CALAMBA LAGUNA",
        MUNICIPALITY: "LAGUNA",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Amaia Steps Nuvali Delicia D",
        ADDRESS: "WEST CONSERVATION AVENUE NUVALI CANLUBANG CALAMBA LAGUNA",
        MUNICIPALITY: "LAGUNA",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Amaia Steps Parkway Nuvali Delicia A",
        ADDRESS: "WEST CONSERVATION AVENUE NUVALI CANLUBANG CALAMBA LAGUNA",
        MUNICIPALITY: "LAGUNA",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Amaia Steps Parkway Nuvali Delicia B",
        ADDRESS: "WEST CONSERVATION AVENUE NUVALI CANLUBANG CALAMBA LAGUNA",
        MUNICIPALITY: "LAGUNA",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Amaia Steps Parkway Nuvali Aria A",
        ADDRESS: "WEST CONSERVATION AVENUE NUVALI CANLUBANG CALAMBA LAGUNA",
        MUNICIPALITY: "LAGUNA",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Splendido Tower 1",
        ADDRESS: "TAGAYTAY",
        MUNICIPALITY: "TAGAYTAY",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Splendido Tower 2",
        ADDRESS: "TAGAYTAY",
        MUNICIPALITY: "TAGAYTAY",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "One Pacific Residences",
        ADDRESS: "MACTAN NEWTOWN NEWTOWN BLVD LAPU-LAPU CITY CEBU",
        MUNICIPALITY: "CEBU CITY",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "Matina Enclaves Residences Bldg B",
        ADDRESS: "MATINA DAVAO CITY",
        MUNICIPALITY: "DAVAO CITY",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "Matina Enclaves Residences Bldg C",
        ADDRESS: "MATINA DAVAO CITY",
        MUNICIPALITY: "DAVAO CITY",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "8 Newton Boulevard Cebu Cluster 1",
        ADDRESS: "Brgy. Mactan Lapu-lapu City",
        MUNICIPALITY: "CEBU CITY",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "8 Newton Boulevard Cebu Cluster 2",
        ADDRESS: "Brgy. Mactan Lapu-lapu City",
        MUNICIPALITY: "CEBU CITY",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "Amalfi Residences Bldg 1",
        ADDRESS: "Citi di Mare South Road Properties Cebu City",
        MUNICIPALITY: "CEBU CITY",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "Amalfi Residences Bldg 2",
        ADDRESS: "Citi di Mare South Road Properties Cebu City",
        MUNICIPALITY: "CEBU CITY",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "Amalfi Residences Bldg 3",
        ADDRESS: "Citi di Mare South Road Properties Cebu City",
        MUNICIPALITY: "CEBU CITY",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "Arterra Bayfront Residences Tower 2",
        ADDRESS: "PUNTA ENGAÑO ROAD MACTAN LAPU-LAPU CITY CEBU",
        MUNICIPALITY: "CEBU CITY",
        EXCLUSIVITY: "exclusive"
    },
    {
        MDU: "Azalea Place Hotel",
        ADDRESS: "Gorordo Ave. Lahug Cebu City",
        MUNICIPALITY: "CEBU CITY",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "Grand Land Inc Towers 2",
        ADDRESS: "Cebu",
        MUNICIPALITY: "CEBU CITY",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "Grand Land Inc Towers 3",
        ADDRESS: "Cebu",
        MUNICIPALITY: "CEBU CITY",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "Horizons 101 Tower 1",
        ADDRESS: "Gen. Maxilom Avenue Cebu City",
        MUNICIPALITY: "CEBU CITY",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "Horizons 101 Tower 2",
        ADDRESS: "Gen. Maxilom Avenue Cebu City",
        MUNICIPALITY: "CEBU CITY",
        EXCLUSIVITY: ""
    },
    {
        MDU: "One Oasis Cebu Bldg 5",
        ADDRESS: "City di Mare South Road Properties Cebu City",
        MUNICIPALITY: "CEBU CITY",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "One Oasis Cebu Bldg 9",
        ADDRESS: "City di Mare South Road Properties Cebu City",
        MUNICIPALITY: "CEBU CITY",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "One Pacific Residences Tower 1",
        ADDRESS: "Newtown Blvd. Mactan Cebu",
        MUNICIPALITY: "CEBU CITY",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "One Pacific Residences Tower 3",
        ADDRESS: "Newtown Blvd. Mactan Cebu",
        MUNICIPALITY: "CEBU CITY",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "Park Point Residences in Cebu",
        ADDRESS: "Cardinal Rosales Ave. Ayala Center Cebu",
        MUNICIPALITY: "CEBU CITY",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "San Remo Residences Bldg 1",
        ADDRESS: "Citta di Mare South Road Properties Brgy.Kalunasan Cebu City",
        MUNICIPALITY: "CEBU CITY",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "San Remo Residences Bldg 2",
        ADDRESS: "Citta di Mare South Road Properties Brgy.Kalunasan Cebu City",
        MUNICIPALITY: "CEBU CITY",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "San Remo Residences Bldg 3",
        ADDRESS: "Citta di Mare South Road Properties Brgy.Kalunasan Cebu City",
        MUNICIPALITY: "CEBU CITY",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "San Remo Residences Bldg 4",
        ADDRESS: "Citta di Mare South Road Properties Brgy.Kalunasan Cebu City",
        MUNICIPALITY: "CEBU CITY",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "San Remo Residences Bldg 5",
        ADDRESS: "Citta di Mare South Road Properties Brgy.Kalunasan Cebu City",
        MUNICIPALITY: "CEBU CITY",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "San Remo Residences Bldg 6",
        ADDRESS: "Citta di Mare South Road Properties Brgy.Kalunasan Cebu City",
        MUNICIPALITY: "CEBU CITY",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "San Remo Residences Bldg 7",
        ADDRESS: "Citta di Mare South Road Properties Brgy.Kalunasan Cebu City",
        MUNICIPALITY: "CEBU CITY",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "Bluewater Maribago",
        ADDRESS: "MACTAN LAPU-LAPU CITY CEBU",
        MUNICIPALITY: "CEBU CITY",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "One Madison Place Tower 1",
        ADDRESS: "Manduriao Iloilo City",
        MUNICIPALITY: "ILOILO CITY",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "One Madison Place Tower 2",
        ADDRESS: "Manduriao Iloilo City",
        MUNICIPALITY: "ILOILO CITY",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "One Madison Place Tower 3",
        ADDRESS: "Manduriao Iloilo City",
        MUNICIPALITY: "ILOILO CITY",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "Centrio CDO Tower 1",
        ADDRESS: "Cagayan de Oro Misamis Oriental",
        MUNICIPALITY: "CDO",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "One Oasis CDO Bldg 1",
        ADDRESS: "Rosario Limketkai Ave. Brgy. Lapasan Cagayan de Oro City",
        MUNICIPALITY: "CDO",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "One Oasis CDO Bldg 2",
        ADDRESS: "Rosario Limketkai Ave. Brgy. Lapasan Cagayan de Oro City",
        MUNICIPALITY: "CDO",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "Abreeza Residences Tower 1",
        ADDRESS: "JP LAUREL AVENUE POBLACION DISTRICT DAVAO CITY",
        MUNICIPALITY: "DAVAO CITY",
        EXCLUSIVITY: "Non-exclusive only provider"
    },
    {
        MDU: "Abreeza Residences Tower 2",
        ADDRESS: "JP LAUREL AVENUE POBLACION DISTRICT DAVAO CITY",
        MUNICIPALITY: "DAVAO CITY",
        EXCLUSIVITY: "Non-exclusive only provider"
    },
    {
        MDU: "Anvaya Cove Seabreeze Veranda",
        ADDRESS: "MABAYO MORONG BATAAN",
        MUNICIPALITY: "BATAAN",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Anvaya Cove Seabreeze Veranda E",
        ADDRESS: "MABAYO MORONG BATAAN",
        MUNICIPALITY: "",
        EXCLUSIVITY: ""
    },
    {
        MDU: "Anvaya Cove Seascape Ridge",
        ADDRESS: "MABAYO MORONG BATAAN",
        MUNICIPALITY: "BATAAN",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Anvaya Cove Seaside",
        ADDRESS: "MABAYO MORONG BATAAN",
        MUNICIPALITY: "BATAAN",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "8 Spatial Residences. Tower 1",
        ADDRESS: "TALOMO DAVAO CITY",
        MUNICIPALITY: "DAVAO CITY",
        EXCLUSIVITY: "Non-exclusive only provider"
    },
    {
        MDU: "8 Spatial Residences. Tower 2",
        ADDRESS: "TALOMO DAVAO CITY",
        MUNICIPALITY: "DAVAO CITY",
        EXCLUSIVITY: "Non-exclusive only provider"
    },
    {
        MDU: "8 Spatial Residences. Tower 3",
        ADDRESS: "TALOMO DAVAO CITY",
        MUNICIPALITY: "DAVAO CITY",
        EXCLUSIVITY: "Non-exclusive only provider"
    },
    {
        MDU: "8 Spatial Residences. Tower 4",
        ADDRESS: "TALOMO DAVAO CITY",
        MUNICIPALITY: "DAVAO CITY",
        EXCLUSIVITY: "Non-exclusive only provider"
    },
    {
        MDU: "Antara Condominium",
        ADDRESS: "LAWAAN 3 TALISAY CEBU",
        MUNICIPALITY: "CEBU CITY",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Urban Hive Palms Residences Building 6",
        ADDRESS: "POBLACION DISTRICT DAVAO CITY",
        MUNICIPALITY: "DAVAO CITY",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Urban Hive Palms Residences Building 7",
        ADDRESS: "POBLACION DISTRICT DAVAO CITY",
        MUNICIPALITY: "DAVAO CITY",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "One Manchester Place Residences Tower 1",
        ADDRESS: "MACTAN LAPU-LAPU CITY CEBU",
        MUNICIPALITY: "CEBU CITY",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "One Manchester Place Residences Tower 2",
        ADDRESS: "MACTAN LAPU-LAPU CITY CEBU",
        MUNICIPALITY: "CEBU CITY",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Mivesa Gardens Residences Tower 3",
        ADDRESS: "LAHUG CEBU CITY",
        MUNICIPALITY: "CEBU CITY",
        EXCLUSIVITY: "non-exclusive"
    },
    {
        MDU: "Marina Spatial",
        ADDRESS: "ESCANO BEACH FLORES AVENUE BRGY PIAPI DUMAGUETE",
        MUNICIPALITY: "DUMAGUETE",
        EXCLUSIVITY: "Non-exclusive only provider"
    },
    {
        MDU: "Amaia Steps Altaraza Aria",
        ADDRESS: "TUNGKONG MANGGA SAN JOSE DEL MONTE BULACAN",
        MUNICIPALITY: "BULACAN",
        EXCLUSIVITY: "Exclusive"
    },
    {
        MDU: "Soltana Residences Tower 1",
        ADDRESS: "BASAK-MARIGINDON ROAD LAPU LAPU CEBU",
        MUNICIPALITY: "CEBU CITY",
        EXCLUSIVITY: "Non-exclusive only provider"
    },
    {
        MDU: "Centro Spatial Residences Building A",
        ADDRESS: "BOLTON EXTENTION BRGY 39D DAVAO CITY",
        MUNICIPALITY: "DAVAO CITY",
        EXCLUSIVITY: ""
    },
    {
        MDU: "Avida Aspira Tower 1",
        ADDRESS: "Cagayan de Oro Misamis Oriental",
        MUNICIPALITY: "CDO",
        EXCLUSIVITY: ""
    },
    {
        MDU: "Tierra Lorenzo Residences Bldg 1",
        ADDRESS: "LIPA CITY BATANGAS",
        MUNICIPALITY: "BATANGAS",
        EXCLUSIVITY: ""
    },
    {
        MDU: "Lafayette Park Residences",
        ADDRESS: "Manduriao Iloilo City",
        MUNICIPALITY: "ILOILO CITY",
        EXCLUSIVITY: ""
    },
    {
        MDU: "One Regis Residences",
        ADDRESS: "BACOLOD",
        MUNICIPALITY: "BACOLOD",
        EXCLUSIVITY: ""
    },
    {
        MDU: "Fort Victoria Building A-C",
        ADDRESS: "5th Ave. Fort Bonifacio Global City Taguig",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "All applications should be coursed through Building Admin. Horizontal cabling needs to be replaced prior installation"
    },
    {
        MDU: "Isabelle De Valenzuela Building B-D",
        ADDRESS: "MacArthur Hwy Valenzuela",
        MUNICIPALITY: "VALENZUELA",
        EXCLUSIVITY: "All applications should be coursed through Building Admin. Horizontal cabling needs to be replaced prior installation"
    },
    {
        MDU: "Parkside Villas Cluster A-F",
        ADDRESS: "Sales Rd Newport Pasay",
        MUNICIPALITY: "PASAY",
        EXCLUSIVITY: "All applications should be coursed through Building Admin. Horizontal cabling needs to be replaced prior installation"
    },
    {
        MDU: "Avant",
        ADDRESS: "Crescent West Park Global City Taguig",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "All inquiries should be passed on to the Building Admin. Installation is handled by Planet Cable."
    },
    {
        MDU: "Pinecrest Tower 2",
        ADDRESS: "Aurora Blvd. Quezon City",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "All inquiries should be passed on to the Building Admin. Installation is handled by Planet Cable."
    },
    {
        MDU: "KL Mosaic",
        ADDRESS: "Gamboa Street Legazpi Village Makati City",
        MUNICIPALITY: "MAKATI",
        EXCLUSIVITY: "All inquiries should be passed on to the Building Admin. Installation is handled by Planet Cable."
    },
    {
        MDU: "Pacific Residences - Elizabeth",
        ADDRESS: "Taguig City",
        MUNICIPALITY: "TAGUIG",
        EXCLUSIVITY: "All inquiries should be passed on to the Building Admin. Installation is handled by Planet Cable."
    },
    {
        MDU: "Brescia Residences",
        ADDRESS: "Lilac Street Dahlia Fairview Quezon City",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "All inquiries should be passed on to the Building Admin. Installation is handled by Planet Cable."
    },
    {
        MDU: "Trevi Tower",
        ADDRESS: "Pasong Tamo Makati City",
        MUNICIPALITY: "MAKATI",
        EXCLUSIVITY: "All inquiries should be passed on to the Building Admin. Installation is handled by Planet Cable."
    },
    {
        MDU: "Vistaland Shaw Residences",
        ADDRESS: "515 SHAW BLVD MANDALUYONG CITY",
        MUNICIPALITY: "MANDALUYONG",
        EXCLUSIVITY: "All inquiries should be passed on to the Building Admin. Installation is handled by Planet Cable."
    },
    {
        MDU: "Vistaland Taft Residences",
        ADDRESS: "Taft Avenue Malate Manila",
        MUNICIPALITY: "MANILA",
        EXCLUSIVITY: "All inquiries should be passed on to the Building Admin. Installation is handled by Planet Cable."
    },
    {
        MDU: "Vistaland Katipunan Residences",
        ADDRESS: "309 KATIPUNAN AVENUE BRGY LOYOLA HEIGHTS QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "All inquiries should be passed on to the Building Admin. Installation is handled by Planet Cable."
    },
    {
        MDU: "Salcedo Square",
        ADDRESS: "L.P. Leviste Street Makati Metro Manila",
        MUNICIPALITY: "MAKATI",
        EXCLUSIVITY: "All inquiries should be passed on to the Building Admin. Installation is handled by Planet Cable."
    },
    {
        MDU: "Wil Tower",
        ADDRESS: "Mother Ignacia South Tiangle QC",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "All inquiries should be passed on to the Building Admin. Installation is handled by Planet Cable."
    },
    {
        MDU: "Twin Oaks Place West Tower",
        ADDRESS: "750 Shaw Bouleverd Greenfield District Mandaluyong City",
        MUNICIPALITY: "MANDALUYONG",
        EXCLUSIVITY: "All inquiries should be passed on to the Building Admin. IP MDU"
    },
    {
        MDU: "Twin Oaks Place East Tower",
        ADDRESS: "750 Shaw Bouleverd Greenfield District Mandaluyong City",
        MUNICIPALITY: "MANDALUYONG",
        EXCLUSIVITY: "All inquiries should be passed on to the Building Admin. IP MDU"
    },
    {
        MDU: "Zitan Greenfield District",
        ADDRESS: "750 Shaw Bouleverd Greenfield District Mandaluyong City",
        MUNICIPALITY: "MANDALUYONG",
        EXCLUSIVITY: "All inquiries should be passed on to the Building Admin. IP MDU"
    },
    {
        MDU: "Urban Deca Homes Marilao",
        ADDRESS: "MC ARTHUR HIGHWAY MARILAO BULACAN",
        MUNICIPALITY: "MARILAO BULACAN",
        EXCLUSIVITY: "All inquiries should be passed on to the Building Admin. Installation is ahandled by 8990 FTDH"
    },
    {
        MDU: "Urban Deca Homes Tondo",
        ADDRESS: "VITAS STREET TONDO MANILA",
        MUNICIPALITY: "MANILA",
        EXCLUSIVITY: "All inquiries should be passed on to the Building Admin. Installation is ahandled by 8990 FTDH"
    },
    {
        MDU: "The Hive Residences Tower A",
        ADDRESS: "ORTIGAS AVENUE EXTENSION BRGY SAN ISIDRO TAYTAY RIZAL",
        MUNICIPALITY: "TAYTAY RIZAL",
        EXCLUSIVITY: "All inquiries should be passed on to the Building Admin."
    },
    {
        MDU: "Northpoint Residences Manchester Building B",
        ADDRESS: "J.P LAUREL AVENUE BUHANGIN DAVAO CITY",
        MUNICIPALITY: "DAVAO CITY",
        EXCLUSIVITY: "All inquiries should be passed on to the Building Admin. Installation is handled by Planet Cable."
    },
    {
        MDU: "Camella Northpoint Liverpool",
        ADDRESS: "J.P LAUREL AVENUE BUHANGIN DAVAO CITY",
        MUNICIPALITY: "DAVAO CITY",
        EXCLUSIVITY: "All inquiries should be passed on to the Building Admin. Installation is handled by Planet Cable."
    },
    {
        MDU: "Camella Northpoint Nottingham",
        ADDRESS: "J.P LAUREL AVENUE BUHANGIN DAVAO CITY",
        MUNICIPALITY: "DAVAO CITY",
        EXCLUSIVITY: "All inquiries should be passed on to the Building Admin. Installation is handled by Planet Cable."
    },
    {
        MDU: "Camella Northpoint Birmingham",
        ADDRESS: "J.P LAUREL AVENUE BUHANGIN DAVAO CITY",
        MUNICIPALITY: "DAVAO CITY",
        EXCLUSIVITY: "All inquiries should be passed on to the Building Admin. Installation is handled by Planet Cable."
    },
    {
        MDU: "Camella Northpoint Manchester",
        ADDRESS: "J.P LAUREL AVENUE BUHANGIN DAVAO CITY",
        MUNICIPALITY: "DAVAO CITY",
        EXCLUSIVITY: "All inquiries should be passed on to the Building Admin. Installation is handled by Planet Cable."
    },
    {
        MDU: "Symphony Tower Tower 2",
        ADDRESS: "6 SGT. ESGUERRA AVENUE CORNER TIMOG AVENUE BRGY SOUTH TRIANGLE QUEZON CITY",
        MUNICIPALITY: "QUEZON CITY",
        EXCLUSIVITY: "All inquiries should be passed on to the Building Admin. Installation is handled by Planet Cable."
    },
    {
        MDU: "The Currency Residences",
        ADDRESS: "DOÑA JULIA VARGAS AVENUE ORTIGAS CENTER PASIG CITY",
        MUNICIPALITY: "PASIG",
        EXCLUSIVITY: "All inquiries should be passed on to the Building Admin. Installation is handled by Planet Cable."
    },
    {
        MDU: "Mosaic Tower",
        ADDRESS: "MAKATI CITY",
        MUNICIPALITY: "MAKATI",
        EXCLUSIVITY: "All inquiries should be passed on to the Building Admin. Installation is handled by Planet Cable."
    },
    {
        MDU: "Vista 878 España Residences",
        ADDRESS: "878 TOLENTINO CORNER ESPANA BLVD SAMPALOC MANILA",
        MUNICIPALITY: "MANILA",
        EXCLUSIVITY: "All inquiries should be passed on to the Building Admin. Installation is handled by Planet Cable."
    }
];

// Function to populate the table
function populateTable(data) {
    const tableBody = document.querySelector('.dataTable tbody');

    data.forEach(item => {
        const row = document.createElement('tr');

    // Create and append cells for each property
    for(const key in item) {
        const cell = document.createElement('td');
        cell.textContent = item[key];
        row.appendChild(cell);
    }

    // Append the row to the table body
    tableBody.appendChild(row);
    });
}

// Call the function to populate the table
populateTable(mduList);