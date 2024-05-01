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
            title: 'Nombre',
            key: 'name',
            'class': 'sticky-header',
        },
        {
            title: 'Descripción',
            key: 'description',
            'class': 'sticky-header',
        },
        {
            title: 'Unidad',
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
  