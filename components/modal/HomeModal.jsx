'use client'

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Image,
  } from '@chakra-ui/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

  const HomeModal = () => {
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()

    useEffect(() => {
        if (router.pathname === '/') {
            setIsOpen(true)
        } else {
            setIsOpen(false)
        }
    }, [router.pathname])

    return (
      <>
        <Modal isOpen={isOpen}>
          <ModalOverlay bg={"none"}/>
          <ModalContent>
            <ModalCloseButton />
            <ModalBody>
              <Image src='https://d2jnbxtr5v4vqu.cloudfront.net/filemanager/Fitriani/china-homelife-banner-1-2023_11_01_14_11_51.png' alt='logo' />
            </ModalBody>
  
            <ModalFooter>
                <Link href='/' >
              <Button colorScheme='blue' mr={3}>
                Click Here Now!
              </Button>
              </Link>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default HomeModal