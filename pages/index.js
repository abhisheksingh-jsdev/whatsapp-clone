import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from "styled-components"

export default function Home() {
  return (
    <Container>
      <Head>
        <title>WhatS App Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Section>
          <div>
            <Image src="/whatsapp_home.jpg" width={250} height={250} alt="Whatsapp-home"/>
          </div>
          
          <div>
            <h2 style={{fontSize:"28px",fontWeight:"200",color:'#727372'}}>Keep your phone connected</h2>
            <p style={{fontSize:'14px',lineHeight:"20px",color:'#b7b9bb'}}>WhatsApp connects to your phone to sync messages. To reduce data usage, connect your phone to Wi-Fi.</p>
          </div>

          
        </Section>
    
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:#f8fafc;
  width:100%;
  height: 100%;

`

const Section = styled.div`
  width:50%;
  text-align: center;
`
