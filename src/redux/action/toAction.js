export const Add = 'Add_DATA'
export const Delete = 'Edit_DATA'
export const Edit = 'Edit_List'

export const AddData = (data) => {
    return {
        type: Add,
        payload: data,
    };
}

export const DeleteData = (data, type) => {
    return {
        type: Delete,
        payload: { [type]: data }
    }
}

export const EditData = (data, type) => {
    return {
        type: Edit,
        payload: { [type]: data }
    }
}