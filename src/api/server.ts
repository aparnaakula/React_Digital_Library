const token = '776499291e0120da45f56f468b8ee72e2afb3e51c851d64a'
export const server_calls = {
    get: async () => {
        const response = await fetch('https://phonebook-app-fhx8.onrender.com/api/contacts',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            } 
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    create: async(data: any = {}) => {
        console.log(""+JSON.stringify(data));
        
        const response = await fetch('https://phonebook-app-fhx8.onrender.com/api/contacts',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
    },
    update: async (id: string, data:any = {}) => {
        const response = await fetch(`https://phonebook-app-fhx8.onrender.com/api/contacts/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'x-access-token': `Bearer ${token}`
                },
                body: JSON.stringify(data)
    
            })
    
            if (!response.ok) {
                throw new Error('Failed to update data on the server')
            }
    
            return await response.json()
        },

    delete: async(id:string) => {
        const response = await fetch(`https://phonebook-app-fhx8.onrender.com/api/contacts/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }
        })
        if(!response.ok){
            throw new Error('Failed to Update data on server')
        }
        
        return;
    },
}