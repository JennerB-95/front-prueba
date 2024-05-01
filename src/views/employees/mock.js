import { ref } from 'vue';

const headers = ref(
    [
        {
            title: 'Código',
            align: 'start',
            sortable: false,
            'class': 'sticky-header',
            key: 'code',
        },
        {
            title: 'Nombres',
            key: 'name',
            'class': 'sticky-header',
        },
        {
            title: 'Apellidos',
            key: 'description',
            'class': 'sticky-header',
        },
        {
            title: 'Fecha Nacimiento',
            key: 'unit',
            'class': 'sticky-header',
        },
        {
            title: 'Departamento',
            key: 'unit',
            'class': 'sticky-header',
        },
        {
            title: 'Acciones',
            key: 'accions',
            'class': 'sticky-header',

        },
    ]
) 

export {headers};
  