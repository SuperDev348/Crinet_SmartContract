import React, { useEffect, useState } from 'react';
import { Col, Container, Row,} from 'react-bootstrap';
import logo from '../../../asset/logo.png';
import './Navigation.css'

import ReactTooltip from "react-tooltip";

import { useDispatch, useSelector } from "react-redux";
// import { connect } from "../../../redux/blockchain/blockchainActions";
// import { fetchData } from "../../../redux/data/dataActions";

// import { initWeb3Onboard } from '../../../services'
// import { init, useConnectWallet, useSetChain, useWallets } from '@web3-onboard/react'

let provider;
const bscChainId = '0x38';
// const bscChainId = '0x61';

const Navigation = () => {
    ///////////// web3-onboard /////////////
    // const [{ wallet }, connectWallet, disconnectWallet] = useConnectWallet();
    // const [{ chains, connectedChain, settingChain }, setChain] = useSetChain();
    // const connectedWallets = useWallets();
  
    // const [web3Onboard, setWeb3Onboard] = useState(null);
  
    useEffect(() => {
      // setWeb3Onboard(initWeb3Onboard);

      // dispatch(fetchData());
    }, [])

    // useEffect(() => {
    //   if (!connectedWallets.length) return;
  
    //   const connectedWalletsLabelArray = connectedWallets.map(
    //     ({ label }) => label
    //   )
    //   window.localStorage.setItem(
    //     'connectedWallets',
    //     JSON.stringify(connectedWalletsLabelArray)
    //   )
    // }, [connectedWallets]);
  
    // useEffect(() => {
    //   if (wallet && connectedChain.id !== bscChainId) {
    //     setChain({chainId: bscChainId});
    //   }

    //   if (!wallet?.provider) {
    //     provider = null;
    //   } else {
    //     provider = wallet.provider;
    //   }
    //   if (wallet && connectedChain.id === bscChainId)
    //   {
    //     dispatch(connect(wallet.accounts[0].address, provider));
    //     getData();
    //   }
    // }, [wallet]);
  
    /////////////////////////

    const dispatch = useDispatch();
    const blockchain = useSelector((state) => state.blockchain);

    const getData = () => {
      // dispatch(fetchData());
    };

    // useEffect(() => {
    //     let timer = setInterval(() => {
    //     getData();
    //   }, 3000);
    // });

    return (
        <div className='mt-5 pt-4'>

        <Container>
        <Row className='my-3'>
            <Col sm={12} md={4}>
                <div className='affiliate'>
                    <a className='affiliate-programe' href='#AffiliateProgram'>AFFILIATE PROGRAM</a>
                </div>
            </Col>
            <Col sm={12} md={4}>
                <div className='mt-sm-2'>
                <nav className='affiliate'>
                    <img src={logo} alt="" /> <span className='ico'>ICO PRESALE</span> 
                </nav>
                </div>
            </Col>
            <Col sm={12} md={4}>  
                <div className='affiliate'>
                      <button className='wallet-btn' data-tip data-for="registerTip" onClick={
                          (e) => {
                              e.preventDefault();
                          }}>
                                Connect Wallet
                      </button>

                      <ReactTooltip id="registerTip" place="bottom" effect="solid">
                        <p style={{margin: 0}}>Must have your Wallet chrome extension installed (activate all <br/>
                        the voices in the extens.'s settings) and be sure to have logged in.<br/>
                        Go incognito mode if you still don't find your wallet. <br/>
                        </p>
                      </ReactTooltip>
                </div>
            </Col>
        </Row>
        </Container>

        </div>
    );
};

export default Navigation;