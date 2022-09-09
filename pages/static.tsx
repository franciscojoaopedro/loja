import {GetServerSideProps, GetStaticProps, NextPage} from "next"
import {ReactNode, useEffect, useState } from "react"
import { Container, Row ,Col} from "reactstrap";

interface ApiReference{
    name:string
    timestamp:Date
}

export const getStaticProps: GetStaticProps=  async()=>{
    const staticsData= await fetch (`${process.env.NEXT_PUBLIC_APIURL}/api/hello`)
    .then(res=>res.json())
    return{
        props:{
            staticsData
        }
    }
}


const Static:NextPage=(props:{
    children?:ReactNode
    staticsData?:ApiReference
})=>{
    
    const [clienteSideDate,setClientSideData]=useState<ApiReference>()

    useEffect(()=>{
        fetchData()
    },[])
    const fetchData=async () => {
        const data =await fetch("api/hello")
        .then(response=>response.json())
        setClientSideData(data)         
    }
    return(
        <Container tag="main">

            <h1 className="my-5">
                Como funcionam as renderizações do Next.JS
            </h1>
            
            <Row>
                <Col>
                    <h3>
                        Gerado no estaticamente:
                    </h3>
                    <h2>
                {props.staticsData?.timestamp.toString()}
            </h2>
                </Col>
                <Col>
                    <h3>
                        Gerado no Cliente:
                    </h3>
                    <h2>{clienteSideDate?.timestamp.toString()}</h2>
                </Col>
            </Row>
        </Container>
    )
}
export default Static;