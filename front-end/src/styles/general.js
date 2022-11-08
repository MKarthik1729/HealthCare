import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Colors } from './colors'

export const RedP = styled.p`
color: red;
`

export const CrazyButton = styled.button`
color: aliceblue;
border-radius: 20px;
padding: 20px;
`

export const Linking = styled(Link)`
text-decoration:none;
color: ${Colors.White};
/* font-weight: 700; */
`
