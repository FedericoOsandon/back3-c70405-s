export const swaggerOptions = {
    definition: {
        openapi: '3.0.1',
        info: {
            title: 'Documentación Adoptame web',
            description: 'Esto es la documentación de adoptame'
        }
    },
    apis: [`./src/docs/**/*.yml`]
}