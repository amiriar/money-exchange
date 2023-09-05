import React, { useEffect, useState, useMemo } from 'react';
import { Container, Row, Col, Form, FormControl, Button, InputGroup } from 'react-bootstrap';
import Card from './Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getCoin } from './services/api';
import './Landing.css'
import SearchInput from './SearchInput';

const Landing = () => {
    const [searchValue, setSearchValue] = useState('');
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            const data = await getCoin();
            setCoins(data)
        }
        fetch();
    }, [])

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };

    const searchedCoins = coins.filter(coiner => coiner.name.toLowerCase().includes(searchValue.toLowerCase()))

return (
    <div className='container'>
        <Container className='mt-5 mb-5'>
            <SearchInput value={searchValue} onChange={handleSearchChange} />
      {/* Your other components and content */}
        </Container>
        <Container>
            <Row>
                {
                searchedCoins.map((coin) => (
                <Col key={coin.id} xs={12} md={6} lg={4} xl={3}>
                    <Card
                    image={coin.image}
                    name={coin.name}
                    symbol={coin.symbol}
                    price={coin.current_price}
                    />
                </Col>
                ))
                }
            </Row>
        </Container>

    </div>
);
};

export default Landing;
