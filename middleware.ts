import {withAuth, NextRequestWithAuth } from 'next-auth/middleware'

export default withAuth(
    // `withAuth` augments your `Request` with the users token
    function middleware(request: NextRequestWithAuth){
        console.log(request.nextUrl.pathname)
        console.log(request.nextauth.token)
    },
    {
        callbacks:{
            authorized: ({token}) => token?.role === "admin"
        }
    }
    
)


//applies next auth only to matching routes 
export const config = { matcher: []}