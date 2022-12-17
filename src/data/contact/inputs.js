export default [
  {
    id: 1,
    name: 'firstName',
    type: 'text',
    placeholder: 'Juan',
    label: 'Nombre',
    errorMessage: '¡Debe tener entre 3 y 16 caracteres!',
    pattern: '^[a-zA-ZÀ-ÿ]{3,16}$',
    required: true,
  },
  {
    id: 2,
    name: 'lastName',
    type: 'text',
    placeholder: 'Perez',
    label: 'Apellido',
    errorMessage: '¡Debe tener entre 3 y 20 caracteres!',
    pattern: '^[a-zA-ZÀ-ÿ]{3,20}$',
    required: true,
  },
  {
    id: 3,
    name: 'email',
    type: 'email',
    placeholder: 'juan_perez@gmail.com',
    label: 'Email',
    errorMessage: '¡Debe ser un correo electrónico válido!',
    pattern: '^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$',
    required: true,
  },
  {
    id: 4,
    name: 'phone',
    type: 'text',
    placeholder: '966908047',
    label: 'Teléfono',
    errorMessage: '¡Debe tener mínimo 9 y 16 caracteres numéricos!',
    pattern: '[0-9]{9,16}$',
    required: true,
  },
  {
    id: 5,
    name: 'asunt',
    type: 'text',
    placeholder: 'Asunto',
    label: 'Asunto',
    errorMessage: 'Debe tener entre 3 y 50 caracteres',
    pattern: '[a-zA-ZÀ-ÿ0-9]{3,50}$',
    required: true,
  },
  {
    id: 6,
    name: 'message',
    // type: 'text',
    placeholder: 'Mensaje',
    label: 'Mensaje',
    errorMessage: 'Debe tener entre 3 y 1000 caracteres',
    minLength: 3,
    pattern: '[a-zA-ZÀ-ÿ0-9]{3,50}$',
    required: true,
  },
]
