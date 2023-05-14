const Ciudades = [
    {
        "id": 1,
        "nombre": "Amsterdam",
        "pais": "Países Bajos",
        "precioPasaje": "$400.000",
        "imagen": "/src/assets/Amsterdam.jpg",
        "moneda": "Euro"
    },
    {
        "id": 2,
        "nombre": "Barcelona",
        "pais": "España",
        "precioPasaje": "$350.000",
        "imagen": "/src/assets/barcelona2.jpg",
        "moneda": "Euro"
    },
    {
        "id": 3,
        "nombre": "Berlín",
        "pais": "Alemania",
        "precioPasaje": "$450.000",
        "imagen": "/src/assets/berlin1.jpg",
        "moneda": "Euro"
    },
    {
        "id": 4,
        "nombre": "Londres",
        "pais": "Reino Unido",
        "precioPasaje": "$550.000",
        "imagen": "/src/assets/londres4.jpg",
        "moneda": "Libra esterlina"
    },
    {
        "id": 5,
        "nombre": "París",
        "pais": "Francia",
        "precioPasaje": "$300.000",
        "imagen": "/src/assets/paris2.jpg",
        "moneda": "Euro"
    },
    {
        "id": 6,
        "nombre": "Roma",
        "pais": "Italia",
        "precioPasaje": "$250.000",
        "imagen": "/src/assets/roma1.jpg",
        "moneda": "Euro"
    },

    {
        "id": 7,
        "nombre": "Bangkok",
        "pais": "Tailandia",
        "precioPasaje": "$600.000",
        "imagen": "/src/assets/Bangkok.jpg",
        "moneda": "Baht tailandés"
    },
    {
        "id": 8,
        "nombre": "Hong Kong",
        "pais": "China",
        "precioPasaje": "$800.000",
        "imagen": "/src/assets/Hongkong.jpg",
        "moneda": "Dólar de Hong Kong"
    },
    {
        "id": 9,
        "nombre": "Tokio",
        "pais": "Japón",
        "precioPasaje": "$700.000",
        "imagen": "/src/assets/Tokio.jpg",
        "moneda": "Yen japonés"
    },
    {
        "id": 10,
        "nombre": "Bali",
        "pais": "Indonesia",
        "precioPasaje": "$900.000",
        "imagen": "/src/assets/bali.jpeg",
        "moneda": "Rupia indonesia"
    },

    {
        "id": 11,
        "nombre": "Miami",
        "pais": "Estados Unidos",
        "precioPasaje": "$400.000",
        "imagen": "/src/assets/Miami.jpg",
        "moneda": "Dólar estadounidense"
    },
    {
        "id": 12,
        "nombre": "Cancún",
        "pais": "México",
        "precioPasaje": "$300.000",
        "imagen": "/src/assets/Cancun.jpg",
        "moneda": "Peso mexicano"
    },
    {
        "id": 13,
        "nombre": "Río de Janeiro",
        "pais": "Brasil",
        "precioPasaje": "$200.000",
        "imagen": "/src/assets/Rio de janeiro2.jpg",
        "moneda": "Real brasileño"
    },
    {
        "id": 14,
        "nombre": "Nueva York",
        "pais": "Estados Unidos",
        "precioPasaje": "$600.000",
        "imagen": "/src/assets/NY.jpg",
        "moneda": "Dólar estadounidense"
    },
    {
        "id": 15,
        "nombre": "Las Vegas",
        "pais": "Estados Unidos",
        "precioPasaje": "$700.000",
        "imagen": "/src/assets/las vegas.jpg",
        "moneda": "Dólar estadounidense"
    },
    {
        "id": 16,
        "nombre": "Punta del Este",
        "pais": "Uruguay",
        "precioPasaje": "$150.000",
        "imagen": "/src/assets/Punta del este.jpg",
        "moneda": "Peso uruguayo"
    }


]

export const getCiudades = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Ciudades)
        }, 1000)
    })
} 

