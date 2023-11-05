'use client'

import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Select,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import Link from 'next/link'

const NavLink = (props) => {
  const { children, href} = props;

  return (
    <Link href={href}>
        {children}
    </Link>
  );
};

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const rates = [
    { value: '', label: 'Rp. 2,296 - (RMB)' },
    { value: '', label: 'Rp. 291.18 - (Peso)' },
    { value: '', label: 'Rp. 16,537 - (USD)' },
  ]
  
  const countries = [
    { value: '', label: 'USA' },
    { value: '', label: 'Korea' },
    { value: '', label: 'China' },
  ]

  return (
    <>
        <Flex  alignItems={'center'} justifyContent={'space-between'} display={{ base: 'none', md: 'flex' }} px={4} py={1} bg={'white'} >
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />

          <HStack alignItems={'center'}>
            <Select height={5} size={"sm"} placeholder="Rates">
                {rates.map((rate) => (
                    <option key={rate.value} value={rate.value}>
                    {rate.label}
                    </option>
                ))}
            </Select>
          </HStack>

          <Flex alignItems={'center'}>
              
            <HStack fontSize={'sm'} spacing={4}>
                <Link href={'/'}>Home</Link>
                <Link href={'/category'}>Category</Link>
                <Link href={'/academy'}>Academy</Link>
                <Link href={'/consultation'}>Consultation</Link>
                <Link href={'/news'}>News</Link>
                <Link href={'/crowdfund'}>Crowdfund</Link>
                <Link href={'/'}>Tour</Link>
            </HStack>
                

            <HStack alignItems={'center'} marginStart={4}>
                <Select height={5} size={"sm"} placeholder="Country">
                    {countries.map((country) => (
                        <option key={country.value} value={country.value}>
                        {country.label}
                        </option>
                    ))}
                </Select>
            </HStack>

          </Flex>

        </Flex>

    </>
  )
}