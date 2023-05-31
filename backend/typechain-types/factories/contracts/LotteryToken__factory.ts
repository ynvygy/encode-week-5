/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  LotteryToken,
  LotteryTokenInterface,
} from "../../contracts/LotteryToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINTER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002c4138038062002c418339818101604052810190620000379190620003a6565b818181600390816200004a919062000676565b5080600490816200005c919062000676565b505050620000746000801b33620000ae60201b60201c565b620000a67f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a633620000ae60201b60201c565b50506200075d565b620000c08282620001a060201b60201c565b6200019c5760016005600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550620001416200020b60201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b60006005600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600033905090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200027c8262000231565b810181811067ffffffffffffffff821117156200029e576200029d62000242565b5b80604052505050565b6000620002b362000213565b9050620002c1828262000271565b919050565b600067ffffffffffffffff821115620002e457620002e362000242565b5b620002ef8262000231565b9050602081019050919050565b60005b838110156200031c578082015181840152602081019050620002ff565b60008484015250505050565b60006200033f6200033984620002c6565b620002a7565b9050828152602081018484840111156200035e576200035d6200022c565b5b6200036b848285620002fc565b509392505050565b600082601f8301126200038b576200038a62000227565b5b81516200039d84826020860162000328565b91505092915050565b60008060408385031215620003c057620003bf6200021d565b5b600083015167ffffffffffffffff811115620003e157620003e062000222565b5b620003ef8582860162000373565b925050602083015167ffffffffffffffff81111562000413576200041262000222565b5b620004218582860162000373565b9150509250929050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200047e57607f821691505b60208210810362000494576200049362000436565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620004fe7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82620004bf565b6200050a8683620004bf565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b600062000557620005516200054b8462000522565b6200052c565b62000522565b9050919050565b6000819050919050565b620005738362000536565b6200058b62000582826200055e565b848454620004cc565b825550505050565b600090565b620005a262000593565b620005af81848462000568565b505050565b5b81811015620005d757620005cb60008262000598565b600181019050620005b5565b5050565b601f8211156200062657620005f0816200049a565b620005fb84620004af565b810160208510156200060b578190505b620006236200061a85620004af565b830182620005b4565b50505b505050565b600082821c905092915050565b60006200064b600019846008026200062b565b1980831691505092915050565b600062000666838362000638565b9150826002028217905092915050565b62000681826200042b565b67ffffffffffffffff8111156200069d576200069c62000242565b5b620006a9825462000465565b620006b6828285620005db565b600060209050601f831160018114620006ee5760008415620006d9578287015190505b620006e5858262000658565b86555062000755565b601f198416620006fe866200049a565b60005b82811015620007285784890151825560018201915060208501945060208101905062000701565b8683101562000748578489015162000744601f89168262000638565b8355505b6001600288020188555050505b505050505050565b6124d4806200076d6000396000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c806342966c68116100b8578063a217fddf1161007c578063a217fddf1461039b578063a457c2d7146103b9578063a9059cbb146103e9578063d539139314610419578063d547741f14610437578063dd62ed3e1461045357610142565b806342966c68146102e557806370a082311461030157806379cc67901461033157806391d148541461034d57806395d89b411461037d57610142565b8063248a9ca31161010a578063248a9ca3146102135780632f2ff15d14610243578063313ce5671461025f57806336568abe1461027d578063395093511461029957806340c10f19146102c957610142565b806301ffc9a71461014757806306fdde0314610177578063095ea7b31461019557806318160ddd146101c557806323b872dd146101e3575b600080fd5b610161600480360381019061015c919061179a565b610483565b60405161016e91906117e2565b60405180910390f35b61017f6104fd565b60405161018c919061188d565b60405180910390f35b6101af60048036038101906101aa9190611943565b61058f565b6040516101bc91906117e2565b60405180910390f35b6101cd6105b2565b6040516101da9190611992565b60405180910390f35b6101fd60048036038101906101f891906119ad565b6105bc565b60405161020a91906117e2565b60405180910390f35b61022d60048036038101906102289190611a36565b6105eb565b60405161023a9190611a72565b60405180910390f35b61025d60048036038101906102589190611a8d565b61060b565b005b61026761062c565b6040516102749190611ae9565b60405180910390f35b61029760048036038101906102929190611a8d565b610635565b005b6102b360048036038101906102ae9190611943565b6106b8565b6040516102c091906117e2565b60405180910390f35b6102e360048036038101906102de9190611943565b6106ef565b005b6102ff60048036038101906102fa9190611b04565b610728565b005b61031b60048036038101906103169190611b31565b61073c565b6040516103289190611992565b60405180910390f35b61034b60048036038101906103469190611943565b610784565b005b61036760048036038101906103629190611a8d565b6107a4565b60405161037491906117e2565b60405180910390f35b61038561080f565b604051610392919061188d565b60405180910390f35b6103a36108a1565b6040516103b09190611a72565b60405180910390f35b6103d360048036038101906103ce9190611943565b6108a8565b6040516103e091906117e2565b60405180910390f35b61040360048036038101906103fe9190611943565b61091f565b60405161041091906117e2565b60405180910390f35b610421610942565b60405161042e9190611a72565b60405180910390f35b610451600480360381019061044c9190611a8d565b610966565b005b61046d60048036038101906104689190611b5e565b610987565b60405161047a9190611992565b60405180910390f35b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806104f657506104f582610a0e565b5b9050919050565b60606003805461050c90611bcd565b80601f016020809104026020016040519081016040528092919081815260200182805461053890611bcd565b80156105855780601f1061055a57610100808354040283529160200191610585565b820191906000526020600020905b81548152906001019060200180831161056857829003601f168201915b5050505050905090565b60008061059a610a78565b90506105a7818585610a80565b600191505092915050565b6000600254905090565b6000806105c7610a78565b90506105d4858285610c49565b6105df858585610cd5565b60019150509392505050565b600060056000838152602001908152602001600020600101549050919050565b610614826105eb565b61061d81610f4b565b6106278383610f5f565b505050565b60006012905090565b61063d610a78565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146106aa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106a190611c70565b60405180910390fd5b6106b48282611040565b5050565b6000806106c3610a78565b90506106e48185856106d58589610987565b6106df9190611cbf565b610a80565b600191505092915050565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a661071981610f4b565b6107238383611122565b505050565b610739610733610a78565b82611278565b50565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61079682610790610a78565b83610c49565b6107a08282611278565b5050565b60006005600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60606004805461081e90611bcd565b80601f016020809104026020016040519081016040528092919081815260200182805461084a90611bcd565b80156108975780601f1061086c57610100808354040283529160200191610897565b820191906000526020600020905b81548152906001019060200180831161087a57829003601f168201915b5050505050905090565b6000801b81565b6000806108b3610a78565b905060006108c18286610987565b905083811015610906576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108fd90611d65565b60405180910390fd5b6109138286868403610a80565b60019250505092915050565b60008061092a610a78565b9050610937818585610cd5565b600191505092915050565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b61096f826105eb565b61097881610f4b565b6109828383611040565b505050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610aef576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ae690611df7565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610b5e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b5590611e89565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610c3c9190611992565b60405180910390a3505050565b6000610c558484610987565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610ccf5781811015610cc1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cb890611ef5565b60405180910390fd5b610cce8484848403610a80565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610d44576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d3b90611f87565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610db3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610daa90612019565b60405180910390fd5b610dbe838383611445565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610e44576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e3b906120ab565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610f329190611992565b60405180910390a3610f4584848461144a565b50505050565b610f5c81610f57610a78565b61144f565b50565b610f6982826107a4565b61103c5760016005600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550610fe1610a78565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b61104a82826107a4565b1561111e5760006005600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506110c3610a78565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611191576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161118890612117565b60405180910390fd5b61119d60008383611445565b80600260008282546111af9190611cbf565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516112609190611992565b60405180910390a36112746000838361144a565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036112e7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112de906121a9565b60405180910390fd5b6112f382600083611445565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015611379576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113709061223b565b60405180910390fd5b8181036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600260008282540392505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161142c9190611992565b60405180910390a36114408360008461144a565b505050565b505050565b505050565b61145982826107a4565b6114d057611466816114d4565b6114748360001c6020611501565b60405160200161148592919061232f565b6040516020818303038152906040526040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114c7919061188d565b60405180910390fd5b5050565b60606114fa8273ffffffffffffffffffffffffffffffffffffffff16601460ff16611501565b9050919050565b6060600060028360026115149190612369565b61151e9190611cbf565b67ffffffffffffffff811115611537576115366123ab565b5b6040519080825280601f01601f1916602001820160405280156115695781602001600182028036833780820191505090505b5090507f3000000000000000000000000000000000000000000000000000000000000000816000815181106115a1576115a06123da565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f780000000000000000000000000000000000000000000000000000000000000081600181518110611605576116046123da565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600060018460026116459190612369565b61164f9190611cbf565b90505b60018111156116ef577f3031323334353637383961626364656600000000000000000000000000000000600f861660108110611691576116906123da565b5b1a60f81b8282815181106116a8576116a76123da565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600485901c9450806116e890612409565b9050611652565b5060008414611733576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161172a9061247e565b60405180910390fd5b8091505092915050565b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61177781611742565b811461178257600080fd5b50565b6000813590506117948161176e565b92915050565b6000602082840312156117b0576117af61173d565b5b60006117be84828501611785565b91505092915050565b60008115159050919050565b6117dc816117c7565b82525050565b60006020820190506117f760008301846117d3565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561183757808201518184015260208101905061181c565b60008484015250505050565b6000601f19601f8301169050919050565b600061185f826117fd565b6118698185611808565b9350611879818560208601611819565b61188281611843565b840191505092915050565b600060208201905081810360008301526118a78184611854565b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006118da826118af565b9050919050565b6118ea816118cf565b81146118f557600080fd5b50565b600081359050611907816118e1565b92915050565b6000819050919050565b6119208161190d565b811461192b57600080fd5b50565b60008135905061193d81611917565b92915050565b6000806040838503121561195a5761195961173d565b5b6000611968858286016118f8565b92505060206119798582860161192e565b9150509250929050565b61198c8161190d565b82525050565b60006020820190506119a76000830184611983565b92915050565b6000806000606084860312156119c6576119c561173d565b5b60006119d4868287016118f8565b93505060206119e5868287016118f8565b92505060406119f68682870161192e565b9150509250925092565b6000819050919050565b611a1381611a00565b8114611a1e57600080fd5b50565b600081359050611a3081611a0a565b92915050565b600060208284031215611a4c57611a4b61173d565b5b6000611a5a84828501611a21565b91505092915050565b611a6c81611a00565b82525050565b6000602082019050611a876000830184611a63565b92915050565b60008060408385031215611aa457611aa361173d565b5b6000611ab285828601611a21565b9250506020611ac3858286016118f8565b9150509250929050565b600060ff82169050919050565b611ae381611acd565b82525050565b6000602082019050611afe6000830184611ada565b92915050565b600060208284031215611b1a57611b1961173d565b5b6000611b288482850161192e565b91505092915050565b600060208284031215611b4757611b4661173d565b5b6000611b55848285016118f8565b91505092915050565b60008060408385031215611b7557611b7461173d565b5b6000611b83858286016118f8565b9250506020611b94858286016118f8565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611be557607f821691505b602082108103611bf857611bf7611b9e565b5b50919050565b7f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560008201527f20726f6c657320666f722073656c660000000000000000000000000000000000602082015250565b6000611c5a602f83611808565b9150611c6582611bfe565b604082019050919050565b60006020820190508181036000830152611c8981611c4d565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611cca8261190d565b9150611cd58361190d565b9250828201905080821115611ced57611cec611c90565b5b92915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000611d4f602583611808565b9150611d5a82611cf3565b604082019050919050565b60006020820190508181036000830152611d7e81611d42565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000611de1602483611808565b9150611dec82611d85565b604082019050919050565b60006020820190508181036000830152611e1081611dd4565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000611e73602283611808565b9150611e7e82611e17565b604082019050919050565b60006020820190508181036000830152611ea281611e66565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b6000611edf601d83611808565b9150611eea82611ea9565b602082019050919050565b60006020820190508181036000830152611f0e81611ed2565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b6000611f71602583611808565b9150611f7c82611f15565b604082019050919050565b60006020820190508181036000830152611fa081611f64565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000612003602383611808565b915061200e82611fa7565b604082019050919050565b6000602082019050818103600083015261203281611ff6565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b6000612095602683611808565b91506120a082612039565b604082019050919050565b600060208201905081810360008301526120c481612088565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000612101601f83611808565b915061210c826120cb565b602082019050919050565b60006020820190508181036000830152612130816120f4565b9050919050565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b6000612193602183611808565b915061219e82612137565b604082019050919050565b600060208201905081810360008301526121c281612186565b9050919050565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b6000612225602283611808565b9150612230826121c9565b604082019050919050565b6000602082019050818103600083015261225481612218565b9050919050565b600081905092915050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000600082015250565b600061229c60178361225b565b91506122a782612266565b601782019050919050565b60006122bd826117fd565b6122c7818561225b565b93506122d7818560208601611819565b80840191505092915050565b7f206973206d697373696e6720726f6c6520000000000000000000000000000000600082015250565b600061231960118361225b565b9150612324826122e3565b601182019050919050565b600061233a8261228f565b915061234682856122b2565b91506123518261230c565b915061235d82846122b2565b91508190509392505050565b60006123748261190d565b915061237f8361190d565b925082820261238d8161190d565b915082820484148315176123a4576123a3611c90565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006124148261190d565b91506000820361242757612426611c90565b5b600182039050919050565b7f537472696e67733a20686578206c656e67746820696e73756666696369656e74600082015250565b6000612468602083611808565b915061247382612432565b602082019050919050565b600060208201905081810360008301526124978161245b565b905091905056fea26469706673582212208ffccff2229d2df515339f2dd611a30ee9bff35e8013f1beae791d3f554da53864736f6c63430008120033";

type LotteryTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LotteryTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LotteryToken__factory extends ContractFactory {
  constructor(...args: LotteryTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LotteryToken> {
    return super.deploy(name, symbol, overrides || {}) as Promise<LotteryToken>;
  }
  override getDeployTransaction(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  override attach(address: string): LotteryToken {
    return super.attach(address) as LotteryToken;
  }
  override connect(signer: Signer): LotteryToken__factory {
    return super.connect(signer) as LotteryToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LotteryTokenInterface {
    return new utils.Interface(_abi) as LotteryTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LotteryToken {
    return new Contract(address, _abi, signerOrProvider) as LotteryToken;
  }
}
