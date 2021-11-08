const mainnetData = {
    status: '1',
    message: 'OK-Missing/Invalid API Key, rate limit of 1/5sec applied',
    result: [
      {
        SourceCode: 'pragma solidity =0.6.6;\r\n' +
          '\r\n' +
          'interface IUniswapV2Factory {\r\n' +
          '    event PairCreated(address indexed token0, address indexed token1, address pair, uint);\r\n' +
          '\r\n' +
          '    function feeTo() external view returns (address);\r\n' +
          '    function feeToSetter() external view returns (address);\r\n' +
          '\r\n' +
          '    function getPair(address tokenA, address tokenB) external view returns (address pair);\r\n' +
          '    function allPairs(uint) external view returns (address pair);\r\n' +
          '    function allPairsLength() external view returns (uint);\r\n' +
          '\r\n' +
          '    function createPair(address tokenA, address tokenB) external returns (address pair);\r\n' +
          '\r\n' +
          '    function setFeeTo(address) external;\r\n' +
          '    function setFeeToSetter(address) external;\r\n' +
          '}\r\n' +
          '\r\n' +
          'interface IUniswapV2Pair {\r\n' +
          '    event Approval(address indexed owner, address indexed spender, uint value);\r\n' +
          '    event Transfer(address indexed from, address indexed to, uint value);\r\n' +
          '\r\n' +
          '    function name() external pure returns (string memory);\r\n' +
          '    function symbol() external pure returns (string memory);\r\n' +
          '    function decimals() external pure returns (uint8);\r\n' +
          '    function totalSupply() external view returns (uint);\r\n' +
          '    function balanceOf(address owner) external view returns (uint);\r\n' +
          '    function allowance(address owner, address spender) external view returns (uint);\r\n' +
          '\r\n' +
          '    function approve(address spender, uint value) external returns (bool);\r\n' +
          '    function transfer(address to, uint value) external returns (bool);\r\n' +
          '    function transferFrom(address from, address to, uint value) external returns (bool);\r\n' +
          '\r\n' +
          '    function DOMAIN_SEPARATOR() external view returns (bytes32);\r\n' +
          '    function PERMIT_TYPEHASH() external pure returns (bytes32);\r\n' +
          '    function nonces(address owner) external view returns (uint);\r\n' +
          '\r\n' +
          '    function permit(address owner, address spender, uint value, uint deadline, uint8 v, bytes32 r, bytes32 s) external;\r\n' +
          '\r\n' +
          '    event Mint(address indexed sender, uint amount0, uint amount1);\r\n' +
          '    event Burn(address indexed sender, uint amount0, uint amount1, address indexed to);\r\n' +
          '    event Swap(\r\n' +
          '        address indexed sender,\r\n' +
          '        uint amount0In,\r\n' +
          '        uint amount1In,\r\n' +
          '        uint amount0Out,\r\n' +
          '        uint amount1Out,\r\n' +
          '        address indexed to\r\n' +
          '    );\r\n' +
          '    event Sync(uint112 reserve0, uint112 reserve1);\r\n' +
          '\r\n' +
          '    function MINIMUM_LIQUIDITY() external pure returns (uint);\r\n' +
          '    function factory() external view returns (address);\r\n' +
          '    function token0() external view returns (address);\r\n' +
          '    function token1() external view returns (address);\r\n' +
          '    function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast);\r\n' +
          '    function price0CumulativeLast() external view returns (uint);\r\n' +
          '    function price1CumulativeLast() external view returns (uint);\r\n' +
          '    function kLast() external view returns (uint);\r\n' +
          '\r\n' +
          '    function mint(address to) external returns (uint liquidity);\r\n' +
          '    function burn(address to) external returns (uint amount0, uint amount1);\r\n' +
          '    function swap(uint amount0Out, uint amount1Out, address to, bytes calldata data) external;\r\n' +
          '    function skim(address to) external;\r\n' +
          '    function sync() external;\r\n' +
          '\r\n' +
          '    function initialize(address, address) external;\r\n' +
          '}\r\n' +
          '\r\n' +
          'interface IUniswapV2Router01 {\r\n' +
          '    function factory() external pure returns (address);\r\n' +
          '    function WETH() external pure returns (address);\r\n' +
          '\r\n' +
          '    function addLiquidity(\r\n' +
          '        address tokenA,\r\n' +
          '        address tokenB,\r\n' +
          '        uint amountADesired,\r\n' +
          '        uint amountBDesired,\r\n' +
          '        uint amountAMin,\r\n' +
          '        uint amountBMin,\r\n' +
          '        address to,\r\n' +
          '        uint deadline\r\n' +
          '    ) external returns (uint amountA, uint amountB, uint liquidity);\r\n' +
          '    function addLiquidityETH(\r\n' +
          '        address token,\r\n' +
          '        uint amountTokenDesired,\r\n' +
          '        uint amountTokenMin,\r\n' +
          '        uint amountETHMin,\r\n' +
          '        address to,\r\n' +
          '        uint deadline\r\n' +
          '    ) external payable returns (uint amountToken, uint amountETH, uint liquidity);\r\n' +
          '    function removeLiquidity(\r\n' +
          '        address tokenA,\r\n' +
          '        address tokenB,\r\n' +
          '        uint liquidity,\r\n' +
          '        uint amountAMin,\r\n' +
          '        uint amountBMin,\r\n' +
          '        address to,\r\n' +
          '        uint deadline\r\n' +
          '    ) external returns (uint amountA, uint amountB);\r\n' +
          '    function removeLiquidityETH(\r\n' +
          '        address token,\r\n' +
          '        uint liquidity,\r\n' +
          '        uint amountTokenMin,\r\n' +
          '        uint amountETHMin,\r\n' +
          '        address to,\r\n' +
          '        uint deadline\r\n' +
          '    ) external returns (uint amountToken, uint amountETH);\r\n' +
          '    function removeLiquidityWithPermit(\r\n' +
          '        address tokenA,\r\n' +
          '        address tokenB,\r\n' +
          '        uint liquidity,\r\n' +
          '        uint amountAMin,\r\n' +
          '        uint amountBMin,\r\n' +
          '        address to,\r\n' +
          '        uint deadline,\r\n' +
          '        bool approveMax, uint8 v, bytes32 r, bytes32 s\r\n' +
          '    ) external returns (uint amountA, uint amountB);\r\n' +
          '    function removeLiquidityETHWithPermit(\r\n' +
          '        address token,\r\n' +
          '        uint liquidity,\r\n' +
          '        uint amountTokenMin,\r\n' +
          '        uint amountETHMin,\r\n' +
          '        address to,\r\n' +
          '        uint deadline,\r\n' +
          '        bool approveMax, uint8 v, bytes32 r, bytes32 s\r\n' +
          '    ) external returns (uint amountToken, uint amountETH);\r\n' +
          '    function swapExactTokensForTokens(\r\n' +
          '        uint amountIn,\r\n' +
          '        uint amountOutMin,\r\n' +
          '        address[] calldata path,\r\n' +
          '        address to,\r\n' +
          '        uint deadline\r\n' +
          '    ) external returns (uint[] memory amounts);\r\n' +
          '    function swapTokensForExactTokens(\r\n' +
          '        uint amountOut,\r\n' +
          '        uint amountInMax,\r\n' +
          '        address[] calldata path,\r\n' +
          '        address to,\r\n' +
          '        uint deadline\r\n' +
          '    ) external returns (uint[] memory amounts);\r\n' +
          '    function swapExactETHForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline)\r\n' +
          '        external\r\n' +
          '        payable\r\n' +
          '        returns (uint[] memory amounts);\r\n' +
          '    function swapTokensForExactETH(uint amountOut, uint amountInMax, address[] calldata path, address to, uint deadline)\r\n' +
          '        external\r\n' +
          '        returns (uint[] memory amounts);\r\n' +
          '    function swapExactTokensForETH(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline)\r\n' +
          '        external\r\n' +
          '        returns (uint[] memory amounts);\r\n' +
          '    function swapETHForExactTokens(uint amountOut, address[] calldata path, address to, uint deadline)\r\n' +
          '        external\r\n' +
          '        payable\r\n' +
          '        returns (uint[] memory amounts);\r\n' +
          '\r\n' +
          '    function quote(uint amountA, uint reserveA, uint reserveB) external pure returns (uint amountB);\r\n' +
          '    function getAmountOut(uint amountIn, uint reserveIn, uint reserveOut) external pure returns (uint amountOut);\r\n' +
          '    function getAmountIn(uint amountOut, uint reserveIn, uint reserveOut) external pure returns (uint amountIn);\r\n' +
          '    function getAmountsOut(uint amountIn, address[] calldata path) external view returns (uint[] memory amounts);\r\n' +
          '    function getAmountsIn(uint amountOut, address[] calldata path) external view returns (uint[] memory amounts);\r\n' +
          '}\r\n' +
          '\r\n' +
          'interface IUniswapV2Router02 is IUniswapV2Router01 {\r\n' +
          '    function removeLiquidityETHSupportingFeeOnTransferTokens(\r\n' +
          '        address token,\r\n' +
          '        uint liquidity,\r\n' +
          '        uint amountTokenMin,\r\n' +
          '        uint amountETHMin,\r\n' +
          '        address to,\r\n' +
          '        uint deadline\r\n' +
          '    ) external returns (uint amountETH);\r\n' +
          '    function removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(\r\n' +
          '        address token,\r\n' +
          '        uint liquidity,\r\n' +
          '        uint amountTokenMin,\r\n' +
          '        uint amountETHMin,\r\n' +
          '        address to,\r\n' +
          '        uint deadline,\r\n' +
          '        bool approveMax, uint8 v, bytes32 r, bytes32 s\r\n' +
          '    ) external returns (uint amountETH);\r\n' +
          '\r\n' +
          '    function swapExactTokensForTokensSupportingFeeOnTransferTokens(\r\n' +
          '        uint amountIn,\r\n' +
          '        uint amountOutMin,\r\n' +
          '        address[] calldata path,\r\n' +
          '        address to,\r\n' +
          '        uint deadline\r\n' +
          '    ) external;\r\n' +
          '    function swapExactETHForTokensSupportingFeeOnTransferTokens(\r\n' +
          '        uint amountOutMin,\r\n' +
          '        address[] calldata path,\r\n' +
          '        address to,\r\n' +
          '        uint deadline\r\n' +
          '    ) external payable;\r\n' +
          '    function swapExactTokensForETHSupportingFeeOnTransferTokens(\r\n' +
          '        uint amountIn,\r\n' +
          '        uint amountOutMin,\r\n' +
          '        address[] calldata path,\r\n' +
          '        address to,\r\n' +
          '        uint deadline\r\n' +
          '    ) external;\r\n' +
          '}\r\n' +
          '\r\n' +
          'interface IERC20 {\r\n' +
          '    event Approval(address indexed owner, address indexed spender, uint value);\r\n' +
          '    event Transfer(address indexed from, address indexed to, uint value);\r\n' +
          '\r\n' +
          '    function name() external view returns (string memory);\r\n' +
          '    function symbol() external view returns (string memory);\r\n' +
          '    function decimals() external view returns (uint8);\r\n' +
          '    function totalSupply() external view returns (uint);\r\n' +
          '    function balanceOf(address owner) external view returns (uint);\r\n' +
          '    function allowance(address owner, address spender) external view returns (uint);\r\n' +
          '\r\n' +
          '    function approve(address spender, uint value) external returns (bool);\r\n' +
          '    function transfer(address to, uint value) external returns (bool);\r\n' +
          '    function transferFrom(address from, address to, uint value) external returns (bool);\r\n' +
          '}\r\n' +
          '\r\n' +
          'interface IWETH {\r\n' +
          '    function deposit() external payable;\r\n' +
          '    function transfer(address to, uint value) external returns (bool);\r\n' +
          '    function withdraw(uint) external;\r\n' +
          '}\r\n' +
          '\r\n' +
          'contract UniswapV2Router02 is IUniswapV2Router02 {\r\n' +
          '    using SafeMath for uint;\r\n' +
          '\r\n' +
          '    address public immutable override factory;\r\n' +
          '    address public immutable override WETH;\r\n' +
          '\r\n' +
          '    modifier ensure(uint deadline) {\r\n' +
          "        require(deadline >= block.timestamp, 'UniswapV2Router: EXPIRED');\r\n" +
          '        _;\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    constructor(address _factory, address _WETH) public {\r\n' +
          '        factory = _factory;\r\n' +
          '        WETH = _WETH;\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    receive() external payable {\r\n' +
          '        assert(msg.sender == WETH); // only accept ETH via fallback from the WETH contract\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    // **** ADD LIQUIDITY ****\r\n' +
          '    function _addLiquidity(\r\n' +
          '        address tokenA,\r\n' +
          '        address tokenB,\r\n' +
          '        uint amountADesired,\r\n' +
          '        uint amountBDesired,\r\n' +
          '        uint amountAMin,\r\n' +
          '        uint amountBMin\r\n' +
          '    ) internal virtual returns (uint amountA, uint amountB) {\r\n' +
          "        // create the pair if it doesn't exist yet\r\n" +
          '        if (IUniswapV2Factory(factory).getPair(tokenA, tokenB) == address(0)) {\r\n' +
          '            IUniswapV2Factory(factory).createPair(tokenA, tokenB);\r\n' +
          '        }\r\n' +
          '        (uint reserveA, uint reserveB) = UniswapV2Library.getReserves(factory, tokenA, tokenB);\r\n' +
          '        if (reserveA == 0 && reserveB == 0) {\r\n' +
          '            (amountA, amountB) = (amountADesired, amountBDesired);\r\n' +
          '        } else {\r\n' +
          '            uint amountBOptimal = UniswapV2Library.quote(amountADesired, reserveA, reserveB);\r\n' +
          '            if (amountBOptimal <= amountBDesired) {\r\n' +
          "                require(amountBOptimal >= amountBMin, 'UniswapV2Router: INSUFFICIENT_B_AMOUNT');\r\n" +
          '                (amountA, amountB) = (amountADesired, amountBOptimal);\r\n' +
          '            } else {\r\n' +
          '                uint amountAOptimal = UniswapV2Library.quote(amountBDesired, reserveB, reserveA);\r\n' +
          '                assert(amountAOptimal <= amountADesired);\r\n' +
          "                require(amountAOptimal >= amountAMin, 'UniswapV2Router: INSUFFICIENT_A_AMOUNT');\r\n" +
          '                (amountA, amountB) = (amountAOptimal, amountBDesired);\r\n' +
          '            }\r\n' +
          '        }\r\n' +
          '    }\r\n' +
          '    function addLiquidity(\r\n' +
          '        address tokenA,\r\n' +
          '        address tokenB,\r\n' +
          '        uint amountADesired,\r\n' +
          '        uint amountBDesired,\r\n' +
          '        uint amountAMin,\r\n' +
          '        uint amountBMin,\r\n' +
          '        address to,\r\n' +
          '        uint deadline\r\n' +
          '    ) external virtual override ensure(deadline) returns (uint amountA, uint amountB, uint liquidity) {\r\n' +
          '        (amountA, amountB) = _addLiquidity(tokenA, tokenB, amountADesired, amountBDesired, amountAMin, amountBMin);\r\n' +
          '        address pair = UniswapV2Library.pairFor(factory, tokenA, tokenB);\r\n' +
          '        TransferHelper.safeTransferFrom(tokenA, msg.sender, pair, amountA);\r\n' +
          '        TransferHelper.safeTransferFrom(tokenB, msg.sender, pair, amountB);\r\n' +
          '        liquidity = IUniswapV2Pair(pair).mint(to);\r\n' +
          '    }\r\n' +
          '    function addLiquidityETH(\r\n' +
          '        address token,\r\n' +
          '        uint amountTokenDesired,\r\n' +
          '        uint amountTokenMin,\r\n' +
          '        uint amountETHMin,\r\n' +
          '        address to,\r\n' +
          '        uint deadline\r\n' +
          '    ) external virtual override payable ensure(deadline) returns (uint amountToken, uint amountETH, uint liquidity) {\r\n' +
          '        (amountToken, amountETH) = _addLiquidity(\r\n' +
          '            token,\r\n' +
          '            WETH,\r\n' +
          '            amountTokenDesired,\r\n' +
          '            msg.value,\r\n' +
          '            amountTokenMin,\r\n' +
          '            amountETHMin\r\n' +
          '        );\r\n' +
          '        address pair = UniswapV2Library.pairFor(factory, token, WETH);\r\n' +
          '        TransferHelper.safeTransferFrom(token, msg.sender, pair, amountToken);\r\n' +
          '        IWETH(WETH).deposit{value: amountETH}();\r\n' +
          '        assert(IWETH(WETH).transfer(pair, amountETH));\r\n' +
          '        liquidity = IUniswapV2Pair(pair).mint(to);\r\n' +
          '        // refund dust eth, if any\r\n' +
          '        if (msg.value > amountETH) TransferHelper.safeTransferETH(msg.sender, msg.value - amountETH);\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    // **** REMOVE LIQUIDITY ****\r\n' +
          '    function removeLiquidity(\r\n' +
          '        address tokenA,\r\n' +
          '        address tokenB,\r\n' +
          '        uint liquidity,\r\n' +
          '        uint amountAMin,\r\n' +
          '        uint amountBMin,\r\n' +
          '        address to,\r\n' +
          '        uint deadline\r\n' +
          '    ) public virtual override ensure(deadline) returns (uint amountA, uint amountB) {\r\n' +
          '        address pair = UniswapV2Library.pairFor(factory, tokenA, tokenB);\r\n' +
          '        IUniswapV2Pair(pair).transferFrom(msg.sender, pair, liquidity); // send liquidity to pair\r\n' +
          '        (uint amount0, uint amount1) = IUniswapV2Pair(pair).burn(to);\r\n' +
          '        (address token0,) = UniswapV2Library.sortTokens(tokenA, tokenB);\r\n' +
          '        (amountA, amountB) = tokenA == token0 ? (amount0, amount1) : (amount1, amount0);\r\n' +
          "        require(amountA >= amountAMin, 'UniswapV2Router: INSUFFICIENT_A_AMOUNT');\r\n" +
          "        require(amountB >= amountBMin, 'UniswapV2Router: INSUFFICIENT_B_AMOUNT');\r\n" +
          '    }\r\n' +
          '    function removeLiquidityETH(\r\n' +
          '        address token,\r\n' +
          '        uint liquidity,\r\n' +
          '        uint amountTokenMin,\r\n' +
          '        uint amountETHMin,\r\n' +
          '        address to,\r\n' +
          '        uint deadline\r\n' +
          '    ) public virtual override ensure(deadline) returns (uint amountToken, uint amountETH) {\r\n' +
          '        (amountToken, amountETH) = removeLiquidity(\r\n' +
          '            token,\r\n' +
          '            WETH,\r\n' +
          '            liquidity,\r\n' +
          '            amountTokenMin,\r\n' +
          '            amountETHMin,\r\n' +
          '            address(this),\r\n' +
          '            deadline\r\n' +
          '        );\r\n' +
          '        TransferHelper.safeTransfer(token, to, amountToken);\r\n' +
          '        IWETH(WETH).withdraw(amountETH);\r\n' +
          '        TransferHelper.safeTransferETH(to, amountETH);\r\n' +
          '    }\r\n' +
          '    function removeLiquidityWithPermit(\r\n' +
          '        address tokenA,\r\n' +
          '        address tokenB,\r\n' +
          '        uint liquidity,\r\n' +
          '        uint amountAMin,\r\n' +
          '        uint amountBMin,\r\n' +
          '        address to,\r\n' +
          '        uint deadline,\r\n' +
          '        bool approveMax, uint8 v, bytes32 r, bytes32 s\r\n' +
          '    ) external virtual override returns (uint amountA, uint amountB) {\r\n' +
          '        address pair = UniswapV2Library.pairFor(factory, tokenA, tokenB);\r\n' +
          '        uint value = approveMax ? uint(-1) : liquidity;\r\n' +
          '        IUniswapV2Pair(pair).permit(msg.sender, address(this), value, deadline, v, r, s);\r\n' +
          '        (amountA, amountB) = removeLiquidity(tokenA, tokenB, liquidity, amountAMin, amountBMin, to, deadline);\r\n' +
          '    }\r\n' +
          '    function removeLiquidityETHWithPermit(\r\n' +
          '        address token,\r\n' +
          '        uint liquidity,\r\n' +
          '        uint amountTokenMin,\r\n' +
          '        uint amountETHMin,\r\n' +
          '        address to,\r\n' +
          '        uint deadline,\r\n' +
          '        bool approveMax, uint8 v, bytes32 r, bytes32 s\r\n' +
          '    ) external virtual override returns (uint amountToken, uint amountETH) {\r\n' +
          '        address pair = UniswapV2Library.pairFor(factory, token, WETH);\r\n' +
          '        uint value = approveMax ? uint(-1) : liquidity;\r\n' +
          '        IUniswapV2Pair(pair).permit(msg.sender, address(this), value, deadline, v, r, s);\r\n' +
          '        (amountToken, amountETH) = removeLiquidityETH(token, liquidity, amountTokenMin, amountETHMin, to, deadline);\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    // **** REMOVE LIQUIDITY (supporting fee-on-transfer tokens) ****\r\n' +
          '    function removeLiquidityETHSupportingFeeOnTransferTokens(\r\n' +
          '        address token,\r\n' +
          '        uint liquidity,\r\n' +
          '        uint amountTokenMin,\r\n' +
          '        uint amountETHMin,\r\n' +
          '        address to,\r\n' +
          '        uint deadline\r\n' +
          '    ) public virtual override ensure(deadline) returns (uint amountETH) {\r\n' +
          '        (, amountETH) = removeLiquidity(\r\n' +
          '            token,\r\n' +
          '            WETH,\r\n' +
          '            liquidity,\r\n' +
          '            amountTokenMin,\r\n' +
          '            amountETHMin,\r\n' +
          '            address(this),\r\n' +
          '            deadline\r\n' +
          '        );\r\n' +
          '        TransferHelper.safeTransfer(token, to, IERC20(token).balanceOf(address(this)));\r\n' +
          '        IWETH(WETH).withdraw(amountETH);\r\n' +
          '        TransferHelper.safeTransferETH(to, amountETH);\r\n' +
          '    }\r\n' +
          '    function removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(\r\n' +
          '        address token,\r\n' +
          '        uint liquidity,\r\n' +
          '        uint amountTokenMin,\r\n' +
          '        uint amountETHMin,\r\n' +
          '        address to,\r\n' +
          '        uint deadline,\r\n' +
          '        bool approveMax, uint8 v, bytes32 r, bytes32 s\r\n' +
          '    ) external virtual override returns (uint amountETH) {\r\n' +
          '        address pair = UniswapV2Library.pairFor(factory, token, WETH);\r\n' +
          '        uint value = approveMax ? uint(-1) : liquidity;\r\n' +
          '        IUniswapV2Pair(pair).permit(msg.sender, address(this), value, deadline, v, r, s);\r\n' +
          '        amountETH = removeLiquidityETHSupportingFeeOnTransferTokens(\r\n' +
          '            token, liquidity, amountTokenMin, amountETHMin, to, deadline\r\n' +
          '        );\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    // **** SWAP ****\r\n' +
          '    // requires the initial amount to have already been sent to the first pair\r\n' +
          '    function _swap(uint[] memory amounts, address[] memory path, address _to) internal virtual {\r\n' +
          '        for (uint i; i < path.length - 1; i++) {\r\n' +
          '            (address input, address output) = (path[i], path[i + 1]);\r\n' +
          '            (address token0,) = UniswapV2Library.sortTokens(input, output);\r\n' +
          '            uint amountOut = amounts[i + 1];\r\n' +
          '            (uint amount0Out, uint amount1Out) = input == token0 ? (uint(0), amountOut) : (amountOut, uint(0));\r\n' +
          '            address to = i < path.length - 2 ? UniswapV2Library.pairFor(factory, output, path[i + 2]) : _to;\r\n' +
          '            IUniswapV2Pair(UniswapV2Library.pairFor(factory, input, output)).swap(\r\n' +
          '                amount0Out, amount1Out, to, new bytes(0)\r\n' +
          '            );\r\n' +
          '        }\r\n' +
          '    }\r\n' +
          '    function swapExactTokensForTokens(\r\n' +
          '        uint amountIn,\r\n' +
          '        uint amountOutMin,\r\n' +
          '        address[] calldata path,\r\n' +
          '        address to,\r\n' +
          '        uint deadline\r\n' +
          '    ) external virtual override ensure(deadline) returns (uint[] memory amounts) {\r\n' +
          '        amounts = UniswapV2Library.getAmountsOut(factory, amountIn, path);\r\n' +
          "        require(amounts[amounts.length - 1] >= amountOutMin, 'UniswapV2Router: INSUFFICIENT_OUTPUT_AMOUNT');\r\n" +
          '        TransferHelper.safeTransferFrom(\r\n' +
          '            path[0], msg.sender, UniswapV2Library.pairFor(factory, path[0], path[1]), amounts[0]\r\n' +
          '        );\r\n' +
          '        _swap(amounts, path, to);\r\n' +
          '    }\r\n' +
          '    function swapTokensForExactTokens(\r\n' +
          '        uint amountOut,\r\n' +
          '        uint amountInMax,\r\n' +
          '        address[] calldata path,\r\n' +
          '        address to,\r\n' +
          '        uint deadline\r\n' +
          '    ) external virtual override ensure(deadline) returns (uint[] memory amounts) {\r\n' +
          '        amounts = UniswapV2Library.getAmountsIn(factory, amountOut, path);\r\n' +
          "        require(amounts[0] <= amountInMax, 'UniswapV2Router: EXCESSIVE_INPUT_AMOUNT');\r\n" +
          '        TransferHelper.safeTransferFrom(\r\n' +
          '            path[0], msg.sender, UniswapV2Library.pairFor(factory, path[0], path[1]), amounts[0]\r\n' +
          '        );\r\n' +
          '        _swap(amounts, path, to);\r\n' +
          '    }\r\n' +
          '    function swapExactETHForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline)\r\n' +
          '        external\r\n' +
          '        virtual\r\n' +
          '        override\r\n' +
          '        payable\r\n' +
          '        ensure(deadline)\r\n' +
          '        returns (uint[] memory amounts)\r\n' +
          '    {\r\n' +
          "        require(path[0] == WETH, 'UniswapV2Router: INVALID_PATH');\r\n" +
          '        amounts = UniswapV2Library.getAmountsOut(factory, msg.value, path);\r\n' +
          "        require(amounts[amounts.length - 1] >= amountOutMin, 'UniswapV2Router: INSUFFICIENT_OUTPUT_AMOUNT');\r\n" +
          '        IWETH(WETH).deposit{value: amounts[0]}();\r\n' +
          '        assert(IWETH(WETH).transfer(UniswapV2Library.pairFor(factory, path[0], path[1]), amounts[0]));\r\n' +
          '        _swap(amounts, path, to);\r\n' +
          '    }\r\n' +
          '    function swapTokensForExactETH(uint amountOut, uint amountInMax, address[] calldata path, address to, uint deadline)\r\n' +
          '        external\r\n' +
          '        virtual\r\n' +
          '        override\r\n' +
          '        ensure(deadline)\r\n' +
          '        returns (uint[] memory amounts)\r\n' +
          '    {\r\n' +
          "        require(path[path.length - 1] == WETH, 'UniswapV2Router: INVALID_PATH');\r\n" +
          '        amounts = UniswapV2Library.getAmountsIn(factory, amountOut, path);\r\n' +
          "        require(amounts[0] <= amountInMax, 'UniswapV2Router: EXCESSIVE_INPUT_AMOUNT');\r\n" +
          '        TransferHelper.safeTransferFrom(\r\n' +
          '            path[0], msg.sender, UniswapV2Library.pairFor(factory, path[0], path[1]), amounts[0]\r\n' +
          '        );\r\n' +
          '        _swap(amounts, path, address(this));\r\n' +
          '        IWETH(WETH).withdraw(amounts[amounts.length - 1]);\r\n' +
          '        TransferHelper.safeTransferETH(to, amounts[amounts.length - 1]);\r\n' +
          '    }\r\n' +
          '    function swapExactTokensForETH(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline)\r\n' +
          '        external\r\n' +
          '        virtual\r\n' +
          '        override\r\n' +
          '        ensure(deadline)\r\n' +
          '        returns (uint[] memory amounts)\r\n' +
          '    {\r\n' +
          "        require(path[path.length - 1] == WETH, 'UniswapV2Router: INVALID_PATH');\r\n" +
          '        amounts = UniswapV2Library.getAmountsOut(factory, amountIn, path);\r\n' +
          "        require(amounts[amounts.length - 1] >= amountOutMin, 'UniswapV2Router: INSUFFICIENT_OUTPUT_AMOUNT');\r\n" +
          '        TransferHelper.safeTransferFrom(\r\n' +
          '            path[0], msg.sender, UniswapV2Library.pairFor(factory, path[0], path[1]), amounts[0]\r\n' +
          '        );\r\n' +
          '        _swap(amounts, path, address(this));\r\n' +
          '        IWETH(WETH).withdraw(amounts[amounts.length - 1]);\r\n' +
          '        TransferHelper.safeTransferETH(to, amounts[amounts.length - 1]);\r\n' +
          '    }\r\n' +
          '    function swapETHForExactTokens(uint amountOut, address[] calldata path, address to, uint deadline)\r\n' +
          '        external\r\n' +
          '        virtual\r\n' +
          '        override\r\n' +
          '        payable\r\n' +
          '        ensure(deadline)\r\n' +
          '        returns (uint[] memory amounts)\r\n' +
          '    {\r\n' +
          "        require(path[0] == WETH, 'UniswapV2Router: INVALID_PATH');\r\n" +
          '        amounts = UniswapV2Library.getAmountsIn(factory, amountOut, path);\r\n' +
          "        require(amounts[0] <= msg.value, 'UniswapV2Router: EXCESSIVE_INPUT_AMOUNT');\r\n" +
          '        IWETH(WETH).deposit{value: amounts[0]}();\r\n' +
          '        assert(IWETH(WETH).transfer(UniswapV2Library.pairFor(factory, path[0], path[1]), amounts[0]));\r\n' +
          '        _swap(amounts, path, to);\r\n' +
          '        // refund dust eth, if any\r\n' +
          '        if (msg.value > amounts[0]) TransferHelper.safeTransferETH(msg.sender, msg.value - amounts[0]);\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    // **** SWAP (supporting fee-on-transfer tokens) ****\r\n' +
          '    // requires the initial amount to have already been sent to the first pair\r\n' +
          '    function _swapSupportingFeeOnTransferTokens(address[] memory path, address _to) internal virtual {\r\n' +
          '        for (uint i; i < path.length - 1; i++) {\r\n' +
          '            (address input, address output) = (path[i], path[i + 1]);\r\n' +
          '            (address token0,) = UniswapV2Library.sortTokens(input, output);\r\n' +
          '            IUniswapV2Pair pair = IUniswapV2Pair(UniswapV2Library.pairFor(factory, input, output));\r\n' +
          '            uint amountInput;\r\n' +
          '            uint amountOutput;\r\n' +
          '            { // scope to avoid stack too deep errors\r\n' +
          '            (uint reserve0, uint reserve1,) = pair.getReserves();\r\n' +
          '            (uint reserveInput, uint reserveOutput) = input == token0 ? (reserve0, reserve1) : (reserve1, reserve0);\r\n' +
          '            amountInput = IERC20(input).balanceOf(address(pair)).sub(reserveInput);\r\n' +
          '            amountOutput = UniswapV2Library.getAmountOut(amountInput, reserveInput, reserveOutput);\r\n' +
          '            }\r\n' +
          '            (uint amount0Out, uint amount1Out) = input == token0 ? (uint(0), amountOutput) : (amountOutput, uint(0));\r\n' +
          '            address to = i < path.length - 2 ? UniswapV2Library.pairFor(factory, output, path[i + 2]) : _to;\r\n' +
          '            pair.swap(amount0Out, amount1Out, to, new bytes(0));\r\n' +
          '        }\r\n' +
          '    }\r\n' +
          '    function swapExactTokensForTokensSupportingFeeOnTransferTokens(\r\n' +
          '        uint amountIn,\r\n' +
          '        uint amountOutMin,\r\n' +
          '        address[] calldata path,\r\n' +
          '        address to,\r\n' +
          '        uint deadline\r\n' +
          '    ) external virtual override ensure(deadline) {\r\n' +
          '        TransferHelper.safeTransferFrom(\r\n' +
          '            path[0], msg.sender, UniswapV2Library.pairFor(factory, path[0], path[1]), amountIn\r\n' +
          '        );\r\n' +
          '        uint balanceBefore = IERC20(path[path.length - 1]).balanceOf(to);\r\n' +
          '        _swapSupportingFeeOnTransferTokens(path, to);\r\n' +
          '        require(\r\n' +
          '            IERC20(path[path.length - 1]).balanceOf(to).sub(balanceBefore) >= amountOutMin,\r\n' +
          "            'UniswapV2Router: INSUFFICIENT_OUTPUT_AMOUNT'\r\n" +
          '        );\r\n' +
          '    }\r\n' +
          '    function swapExactETHForTokensSupportingFeeOnTransferTokens(\r\n' +
          '        uint amountOutMin,\r\n' +
          '        address[] calldata path,\r\n' +
          '        address to,\r\n' +
          '        uint deadline\r\n' +
          '    )\r\n' +
          '        external\r\n' +
          '        virtual\r\n' +
          '        override\r\n' +
          '        payable\r\n' +
          '        ensure(deadline)\r\n' +
          '    {\r\n' +
          "        require(path[0] == WETH, 'UniswapV2Router: INVALID_PATH');\r\n" +
          '        uint amountIn = msg.value;\r\n' +
          '        IWETH(WETH).deposit{value: amountIn}();\r\n' +
          '        assert(IWETH(WETH).transfer(UniswapV2Library.pairFor(factory, path[0], path[1]), amountIn));\r\n' +
          '        uint balanceBefore = IERC20(path[path.length - 1]).balanceOf(to);\r\n' +
          '        _swapSupportingFeeOnTransferTokens(path, to);\r\n' +
          '        require(\r\n' +
          '            IERC20(path[path.length - 1]).balanceOf(to).sub(balanceBefore) >= amountOutMin,\r\n' +
          "            'UniswapV2Router: INSUFFICIENT_OUTPUT_AMOUNT'\r\n" +
          '        );\r\n' +
          '    }\r\n' +
          '    function swapExactTokensForETHSupportingFeeOnTransferTokens(\r\n' +
          '        uint amountIn,\r\n' +
          '        uint amountOutMin,\r\n' +
          '        address[] calldata path,\r\n' +
          '        address to,\r\n' +
          '        uint deadline\r\n' +
          '    )\r\n' +
          '        external\r\n' +
          '        virtual\r\n' +
          '        override\r\n' +
          '        ensure(deadline)\r\n' +
          '    {\r\n' +
          "        require(path[path.length - 1] == WETH, 'UniswapV2Router: INVALID_PATH');\r\n" +
          '        TransferHelper.safeTransferFrom(\r\n' +
          '            path[0], msg.sender, UniswapV2Library.pairFor(factory, path[0], path[1]), amountIn\r\n' +
          '        );\r\n' +
          '        _swapSupportingFeeOnTransferTokens(path, address(this));\r\n' +
          '        uint amountOut = IERC20(WETH).balanceOf(address(this));\r\n' +
          "        require(amountOut >= amountOutMin, 'UniswapV2Router: INSUFFICIENT_OUTPUT_AMOUNT');\r\n" +
          '        IWETH(WETH).withdraw(amountOut);\r\n' +
          '        TransferHelper.safeTransferETH(to, amountOut);\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    // **** LIBRARY FUNCTIONS ****\r\n' +
          '    function quote(uint amountA, uint reserveA, uint reserveB) public pure virtual override returns (uint amountB) {\r\n' +
          '        return UniswapV2Library.quote(amountA, reserveA, reserveB);\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    function getAmountOut(uint amountIn, uint reserveIn, uint reserveOut)\r\n' +
          '        public\r\n' +
          '        pure\r\n' +
          '        virtual\r\n' +
          '        override\r\n' +
          '        returns (uint amountOut)\r\n' +
          '    {\r\n' +
          '        return UniswapV2Library.getAmountOut(amountIn, reserveIn, reserveOut);\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    function getAmountIn(uint amountOut, uint reserveIn, uint reserveOut)\r\n' +
          '        public\r\n' +
          '        pure\r\n' +
          '        virtual\r\n' +
          '        override\r\n' +
          '        returns (uint amountIn)\r\n' +
          '    {\r\n' +
          '        return UniswapV2Library.getAmountIn(amountOut, reserveIn, reserveOut);\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    function getAmountsOut(uint amountIn, address[] memory path)\r\n' +
          '        public\r\n' +
          '        view\r\n' +
          '        virtual\r\n' +
          '        override\r\n' +
          '        returns (uint[] memory amounts)\r\n' +
          '    {\r\n' +
          '        return UniswapV2Library.getAmountsOut(factory, amountIn, path);\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    function getAmountsIn(uint amountOut, address[] memory path)\r\n' +
          '        public\r\n' +
          '        view\r\n' +
          '        virtual\r\n' +
          '        override\r\n' +
          '        returns (uint[] memory amounts)\r\n' +
          '    {\r\n' +
          '        return UniswapV2Library.getAmountsIn(factory, amountOut, path);\r\n' +
          '    }\r\n' +
          '}\r\n' +
          '\r\n' +
          '// a library for performing overflow-safe math, courtesy of DappHub (https://github.com/dapphub/ds-math)\r\n' +
          '\r\n' +
          'library SafeMath {\r\n' +
          '    function add(uint x, uint y) internal pure returns (uint z) {\r\n' +
          "        require((z = x + y) >= x, 'ds-math-add-overflow');\r\n" +
          '    }\r\n' +
          '\r\n' +
          '    function sub(uint x, uint y) internal pure returns (uint z) {\r\n' +
          "        require((z = x - y) <= x, 'ds-math-sub-underflow');\r\n" +
          '    }\r\n' +
          '\r\n' +
          '    function mul(uint x, uint y) internal pure returns (uint z) {\r\n' +
          "        require(y == 0 || (z = x * y) / y == x, 'ds-math-mul-overflow');\r\n" +
          '    }\r\n' +
          '}\r\n' +
          '\r\n' +
          'library UniswapV2Library {\r\n' +
          '    using SafeMath for uint;\r\n' +
          '\r\n' +
          '    // returns sorted token addresses, used to handle return values from pairs sorted in this order\r\n' +
          '    function sortTokens(address tokenA, address tokenB) internal pure returns (address token0, address token1) {\r\n' +
          "        require(tokenA != tokenB, 'UniswapV2Library: IDENTICAL_ADDRESSES');\r\n" +
          '        (token0, token1) = tokenA < tokenB ? (tokenA, tokenB) : (tokenB, tokenA);\r\n' +
          "        require(token0 != address(0), 'UniswapV2Library: ZERO_ADDRESS');\r\n" +
          '    }\r\n' +
          '\r\n' +
          '    // calculates the CREATE2 address for a pair without making any external calls\r\n' +
          '    function pairFor(address factory, address tokenA, address tokenB) internal pure returns (address pair) {\r\n' +
          '        (address token0, address token1) = sortTokens(tokenA, tokenB);\r\n' +
          '        pair = address(uint(keccak256(abi.encodePacked(\r\n' +
          "                hex'ff',\r\n" +
          '                factory,\r\n' +
          '                keccak256(abi.encodePacked(token0, token1)),\r\n' +
          "                hex'96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f' // init code hash\r\n" +
          '            ))));\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    // fetches and sorts the reserves for a pair\r\n' +
          '    function getReserves(address factory, address tokenA, address tokenB) internal view returns (uint reserveA, uint reserveB) {\r\n' +
          '        (address token0,) = sortTokens(tokenA, tokenB);\r\n' +
          '        (uint reserve0, uint reserve1,) = IUniswapV2Pair(pairFor(factory, tokenA, tokenB)).getReserves();\r\n' +
          '        (reserveA, reserveB) = tokenA == token0 ? (reserve0, reserve1) : (reserve1, reserve0);\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    // given some amount of an asset and pair reserves, returns an equivalent amount of the other asset\r\n' +
          '    function quote(uint amountA, uint reserveA, uint reserveB) internal pure returns (uint amountB) {\r\n' +
          "        require(amountA > 0, 'UniswapV2Library: INSUFFICIENT_AMOUNT');\r\n" +
          "        require(reserveA > 0 && reserveB > 0, 'UniswapV2Library: INSUFFICIENT_LIQUIDITY');\r\n" +
          '        amountB = amountA.mul(reserveB) / reserveA;\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    // given an input amount of an asset and pair reserves, returns the maximum output amount of the other asset\r\n' +
          '    function getAmountOut(uint amountIn, uint reserveIn, uint reserveOut) internal pure returns (uint amountOut) {\r\n' +
          "        require(amountIn > 0, 'UniswapV2Library: INSUFFICIENT_INPUT_AMOUNT');\r\n" +
          "        require(reserveIn > 0 && reserveOut > 0, 'UniswapV2Library: INSUFFICIENT_LIQUIDITY');\r\n" +
          '        uint amountInWithFee = amountIn.mul(997);\r\n' +
          '        uint numerator = amountInWithFee.mul(reserveOut);\r\n' +
          '        uint denominator = reserveIn.mul(1000).add(amountInWithFee);\r\n' +
          '        amountOut = numerator / denominator;\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    // given an output amount of an asset and pair reserves, returns a required input amount of the other asset\r\n' +
          '    function getAmountIn(uint amountOut, uint reserveIn, uint reserveOut) internal pure returns (uint amountIn) {\r\n' +
          "        require(amountOut > 0, 'UniswapV2Library: INSUFFICIENT_OUTPUT_AMOUNT');\r\n" +
          "        require(reserveIn > 0 && reserveOut > 0, 'UniswapV2Library: INSUFFICIENT_LIQUIDITY');\r\n" +
          '        uint numerator = reserveIn.mul(amountOut).mul(1000);\r\n' +
          '        uint denominator = reserveOut.sub(amountOut).mul(997);\r\n' +
          '        amountIn = (numerator / denominator).add(1);\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    // performs chained getAmountOut calculations on any number of pairs\r\n' +
          '    function getAmountsOut(address factory, uint amountIn, address[] memory path) internal view returns (uint[] memory amounts) {\r\n' +
          "        require(path.length >= 2, 'UniswapV2Library: INVALID_PATH');\r\n" +
          '        amounts = new uint[](path.length);\r\n' +
          '        amounts[0] = amountIn;\r\n' +
          '        for (uint i; i < path.length - 1; i++) {\r\n' +
          '            (uint reserveIn, uint reserveOut) = getReserves(factory, path[i], path[i + 1]);\r\n' +
          '            amounts[i + 1] = getAmountOut(amounts[i], reserveIn, reserveOut);\r\n' +
          '        }\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    // performs chained getAmountIn calculations on any number of pairs\r\n' +
          '    function getAmountsIn(address factory, uint amountOut, address[] memory path) internal view returns (uint[] memory amounts) {\r\n' +
          "        require(path.length >= 2, 'UniswapV2Library: INVALID_PATH');\r\n" +
          '        amounts = new uint[](path.length);\r\n' +
          '        amounts[amounts.length - 1] = amountOut;\r\n' +
          '        for (uint i = path.length - 1; i > 0; i--) {\r\n' +
          '            (uint reserveIn, uint reserveOut) = getReserves(factory, path[i - 1], path[i]);\r\n' +
          '            amounts[i - 1] = getAmountIn(amounts[i], reserveIn, reserveOut);\r\n' +
          '        }\r\n' +
          '    }\r\n' +
          '}\r\n' +
          '\r\n' +
          '// helper methods for interacting with ERC20 tokens and sending ETH that do not consistently return true/false\r\n' +
          'library TransferHelper {\r\n' +
          '    function safeApprove(address token, address to, uint value) internal {\r\n' +
          "        // bytes4(keccak256(bytes('approve(address,uint256)')));\r\n" +
          '        (bool success, bytes memory data) = token.call(abi.encodeWithSelector(0x095ea7b3, to, value));\r\n' +
          "        require(success && (data.length == 0 || abi.decode(data, (bool))), 'TransferHelper: APPROVE_FAILED');\r\n" +
          '    }\r\n' +
          '\r\n' +
          '    function safeTransfer(address token, address to, uint value) internal {\r\n' +
          "        // bytes4(keccak256(bytes('transfer(address,uint256)')));\r\n" +
          '        (bool success, bytes memory data) = token.call(abi.encodeWithSelector(0xa9059cbb, to, value));\r\n' +
          "        require(success && (data.length == 0 || abi.decode(data, (bool))), 'TransferHelper: TRANSFER_FAILED');\r\n" +
          '    }\r\n' +
          '\r\n' +
          '    function safeTransferFrom(address token, address from, address to, uint value) internal {\r\n' +
          "        // bytes4(keccak256(bytes('transferFrom(address,address,uint256)')));\r\n" +
          '        (bool success, bytes memory data) = token.call(abi.encodeWithSelector(0x23b872dd, from, to, value));\r\n' +
          "        require(success && (data.length == 0 || abi.decode(data, (bool))), 'TransferHelper: TRANSFER_FROM_FAILED');\r\n" +
          '    }\r\n' +
          '\r\n' +
          '    function safeTransferETH(address to, uint value) internal {\r\n' +
          '        (bool success,) = to.call{value:value}(new bytes(0));\r\n' +
          "        require(success, 'TransferHelper: ETH_TRANSFER_FAILED');\r\n" +
          '    }\r\n' +
          '}',
        ABI: '[{"inputs":[{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_WETH","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"WETH","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"amountADesired","type":"uint256"},{"internalType":"uint256","name":"amountBDesired","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountTokenDesired","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountIn","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountOut","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsIn","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsOut","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"reserveA","type":"uint256"},{"internalType":"uint256","name":"reserveB","type":"uint256"}],"name":"quote","outputs":[{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETHSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermit","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermitSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityWithPermit","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapETHForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETHSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]',
        ContractName: 'UniswapV2Router02',
        CompilerVersion: 'v0.6.6+commit.6c089d02',
        OptimizationUsed: '1',
        Runs: '999999',
        ConstructorArguments: '0000000000000000000000005c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
        EVMVersion: 'istanbul',
        Library: '',
        LicenseType: 'GNU GPLv3',
        Proxy: '0',
        Implementation: '',
        SwarmSource: 'ipfs://6dd6e03c4b2c0a8e55214926227ae9e2d6f9fec2ce74a6446d615afa355c84f3'
      }
    ]
  }
  const arbitrumData ={
    status: '1',
    message: 'OK',
    result: [
      {
        SourceCode: '{{\r\n' +
          '  "language": "Solidity",\r\n' +
          '  "sources": {\r\n' +
          '    "contracts/staking/stARBIS.sol": {\r\n' +
          '      "content": "// SPDX-License-Identifier: GNU GPLv3\\npragma solidity ^0.8.4;\\n\\nimport \\"@openzeppelin/contracts/access/AccessControl.sol\\";\\nimport \\"@openzeppelin/contracts/token/ERC20/ERC20.sol\\";\\nimport \\"@openzeppelin/contracts/token/ERC20/IERC20.sol\\";\\nimport \\"@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol\\";\\nimport \\"@openzeppelin/contracts/security/ReentrancyGuard.sol\\";\\n\\ncontract stARBIS is ERC20, AccessControl, ReentrancyGuard {\\n  using SafeERC20 for IERC20;\\n\\n  IERC20 public immutable arbisToken;\\n  uint256 public totalStaked = 0;\\n  address payable public feeDestination;\\n  uint256 public earlyWithdrawalFee = 0;\\n  uint256 public earlyWithdrawalDistributeShare = 0;\\n  uint256 public earlyWithdrawalSecondsThreshold = 0;\\n  address payable[] public stakeholders;\\n  mapping(address => uint256) public excessTokenRewards;\\n  mapping(address => uint256) public totalCumTokenRewardsPerStake;\\n  mapping(address => mapping(address => uint256)) public paidCumTokenRewardsPerStake;\\n  mapping(address => uint256) public stakedBalance;\\n  address[] public rewardTokens;\\n  mapping(address => bool) public isApprovedRewardToken;\\n  mapping(address => Stakeholder) public stakeholderInfo;\\n  mapping(address => uint256) public lastStakeTime;\\n  uint256 public SCALE = 1e40;\\n\\n  event Stake(address addr, uint256 amount);\\n  event Withdrawal(address addr, uint256 amount);\\n  event RewardCollection(address token, address addr, uint256 amount);\\n  event RewardAdded(address token, uint256 amount, uint256 rps, bool intern);\\n\\n  bytes32 public constant ADMIN_ROLE = keccak256(\\"ADMIN_ROLE\\");\\n\\n  struct Stakeholder {\\n    bool exists;\\n    uint256 idx;\\n  }\\n\\n  constructor(\\n      address _arbisToken\\n    ) ERC20(\\"Staked ARBIS v2\\", \\"stARBIS\\") {\\n    arbisToken = IERC20(_arbisToken);\\n    _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);\\n    rewardTokens.push(_arbisToken);\\n    isApprovedRewardToken[_arbisToken] = true;\\n  }\\n\\n  function addReward(address token, uint256 amount) external nonReentrant {\\n    _addReward(token, amount, false);\\n  }\\n\\n  function _addReward(address token, uint256 amount, bool intern) private {\\n    require(isApprovedRewardToken[token], \\"Token is not approved for rewards\\");\\n    if (!intern) {\\n      IERC20(token).safeTransferFrom(msg.sender, address(this), amount);\\n    }\\n    if (totalStaked == 0) {\\n      // Rewards which nobody is eligible for\\n      excessTokenRewards[token] += amount;\\n      return;\\n    }\\n    uint256 rewardPerStake = (amount * SCALE) / totalStaked;\\n    totalCumTokenRewardsPerStake[token] += rewardPerStake;\\n    emit RewardAdded(token, amount, rewardPerStake, intern);\\n  }\\n\\n  function stake(uint256 amount) external nonReentrant {\\n    require(amount > 0, \\"Invalid stake amount\\");\\n    // Transfer from msg.sender to us\\n    arbisToken.safeTransferFrom(msg.sender, address(this), amount);\\n\\n    // Mint stARBIS\\n    _mint(msg.sender, amount);\\n\\n    if (!stakeholderInfo[msg.sender].exists) {\\n      Stakeholder memory sh = Stakeholder(true, stakeholders.length);\\n      stakeholders.push(payable(msg.sender));\\n      stakeholderInfo[msg.sender] = sh;\\n\\n      // Not eligible for any previous rewards on any token\\n      for (uint256 i = 0; i < rewardTokens.length; i++) {\\n        address token = rewardTokens[i];\\n        paidCumTokenRewardsPerStake[token][msg.sender] = totalCumTokenRewardsPerStake[token];\\n      }\\n    }\\n    else {\\n      _collectRewards();\\n    }\\n\\n    totalStaked += amount;\\n    stakedBalance[msg.sender] += amount;\\n    lastStakeTime[msg.sender] = block.timestamp;\\n    emit Stake(msg.sender, amount);\\n  }\\n\\n  function withdraw(uint256 amount) public nonReentrant {\\n    require(amount > 0, \\"Invalid withdraw amount\\");\\n    require(amount <= stakedBalance[msg.sender], \\"Insufficient balance\\");\\n\\n    // Burn stARBIS\\n    _burn(msg.sender, amount);\\n\\n    if (stakedBalance[msg.sender] - amount == 0) {\\n      // No stake left, so we pay rewards to simplify bookkeeping\\n      _collectRewards();\\n    }\\n\\n    stakedBalance[msg.sender] -= amount;\\n    totalStaked -= amount;\\n\\n    // If you deposited anything within the threshold this will be penalised\\n    uint256 delta = block.timestamp - lastStakeTime[msg.sender];\\n    uint256 fee = 0;\\n    if (delta < earlyWithdrawalSecondsThreshold) {\\n      uint256 actualFeePct = earlyWithdrawalFee - ((delta * earlyWithdrawalFee) / earlyWithdrawalSecondsThreshold);\\n      fee = (amount * actualFeePct) / SCALE;\\n      uint256 redistributedAmount = (fee * earlyWithdrawalDistributeShare) / SCALE;\\n      uint256 remaining = fee - redistributedAmount;\\n      // Redistribute portion of fee to stakers\\n      _addReward(address(arbisToken), redistributedAmount, true);\\n\\n      // The rest goes to the treasury\\n      if (feeDestination != address(0)) {\\n        arbisToken.safeTransfer(feeDestination, remaining);\\n      } \\n    }\\n\\n    // Return ARBIS to the sender, minus any early withdrawal fees\\n    arbisToken.safeTransfer(msg.sender, amount - fee);\\n\\n    if (stakedBalance[msg.sender] == 0) { \\n      // Remove our records of this stakeholder\\n      uint256 idx = stakeholderInfo[msg.sender].idx;\\n      stakeholders[idx] = stakeholders[stakeholders.length - 1];\\n      stakeholderInfo[stakeholders[idx]].idx = idx;\\n      stakeholders.pop();\\n      delete stakeholderInfo[msg.sender];\\n    }\\n    emit Withdrawal(msg.sender, amount);\\n  }\\n\\n  function _collectRewards() private {\\n    for (uint256 i = 0; i < rewardTokens.length; i++) {\\n      _collectRewardsForToken(rewardTokens[i]);\\n    }\\n  }\\n\\n  function _collectRewardsForToken(address token) private {\\n    require(stakedBalance[msg.sender] > 0, \\"No stake for rewards\\");\\n    uint256 owedPerUnitStake = totalCumTokenRewardsPerStake[token] - paidCumTokenRewardsPerStake[token][msg.sender];\\n    uint256 totalRewards = (stakedBalance[msg.sender] * owedPerUnitStake) / SCALE;\\n    paidCumTokenRewardsPerStake[token][msg.sender] = totalCumTokenRewardsPerStake[token];\\n    if (totalRewards > 0) {\\n      IERC20(token).safeTransfer(msg.sender, totalRewards);\\n    }\\n    emit RewardCollection(token, msg.sender, totalRewards);\\n  }\\n\\n  function getAvailableTokenRewards(address token) external view returns (uint256 totalRewards) {\\n    uint256 owedPerUnitStake = totalCumTokenRewardsPerStake[token] - paidCumTokenRewardsPerStake[token][msg.sender];\\n    totalRewards = (stakedBalance[msg.sender] * owedPerUnitStake) / SCALE;\\n  }\\n\\n  function getNumberOfStakeholders() external view returns (uint256) {\\n    return stakeholders.length;\\n  }\\n\\n  function collectRewards() external nonReentrant {\\n    // This function is required so it can be nonReentrant\\n    _collectRewards();\\n  }\\n\\n  function setFeeDestination(address payable dest) external onlyAdmin {\\n    feeDestination = dest;\\n  }\\n\\n  function setEarlyWithdrawalFee(uint256 fee) external onlyAdmin {\\n    earlyWithdrawalFee = fee;\\n  }\\n\\n  function setEarlyWithdrawalDistributeShare(uint256 amount) external onlyAdmin {\\n    // The portion of the fee that is redistributed to stakers\\n    earlyWithdrawalDistributeShare = amount;\\n  }\\n\\n  function setEarlyWithdrawalSecondsThreshold(uint256 threshold) external onlyAdmin {\\n    earlyWithdrawalSecondsThreshold = threshold;\\n  }\\n\\n  function withdrawExcessRewards() external onlyAdmin {\\n    for (uint256 i = 0; i < rewardTokens.length; i++) {\\n      uint256 amount = excessTokenRewards[rewardTokens[i]];\\n      if (amount == 0) {\\n        continue;\\n      }\\n      IERC20(rewardTokens[i]).safeTransfer(msg.sender, amount);\\n      excessTokenRewards[rewardTokens[i]] = 0;\\n    }\\n  }\\n\\n  function addApprovedRewardToken(address token) external onlyAdmin {\\n    isApprovedRewardToken[token] = true;\\n    rewardTokens.push(token);\\n  }\\n\\n  function removeApprovedRewardToken(address token) external onlyAdmin {\\n    for (uint256 i = 0; i < rewardTokens.length; i++) {\\n      if (rewardTokens[i] == token) {\\n        rewardTokens[i] = rewardTokens[rewardTokens.length - 1];\\n        rewardTokens.pop();\\n        isApprovedRewardToken[token] = false;\\n      }\\n    }\\n  }\\n\\n  function setScale(uint256 _scale) external onlyAdmin {\\n    SCALE = _scale;\\n  }\\n\\n  function recoverEth() external onlyAdmin {\\n    // For recovering eth mistakenly sent to the contract\\n    (bool success, ) = msg.sender.call{value: address(this).balance}(\\"\\");\\n    require(success, \\"Withdraw failed\\");\\n  }\\n\\n  modifier onlyAdmin() {\\n    require(hasRole(ADMIN_ROLE, msg.sender), \\"Caller is not an admin\\");\\n    _;\\n  }\\n}"\r\n' +
          '    },\r\n' +
          '    "@openzeppelin/contracts/access/AccessControl.sol": {\r\n' +
          '      "content": "// SPDX-License-Identifier: MIT\\n\\npragma solidity ^0.8.0;\\n\\nimport \\"./IAccessControl.sol\\";\\nimport \\"../utils/Context.sol\\";\\nimport \\"../utils/Strings.sol\\";\\nimport \\"../utils/introspection/ERC165.sol\\";\\n\\n/**\\n * @dev Contract module that allows children to implement role-based access\\n * control mechanisms. This is a lightweight version that doesn\'t allow enumerating role\\n * members except through off-chain means by accessing the contract event logs. Some\\n * applications may benefit from on-chain enumerability, for those cases see\\n * {AccessControlEnumerable}.\\n *\\n * Roles are referred to by their `bytes32` identifier. These should be exposed\\n * in the external API and be unique. The best way to achieve this is by\\n * using `public constant` hash digests:\\n *\\n * ```\\n * bytes32 public constant MY_ROLE = keccak256(\\"MY_ROLE\\");\\n * ```\\n *\\n * Roles can be used to represent a set of permissions. To restrict access to a\\n * function call, use {hasRole}:\\n *\\n * ```\\n * function foo() public {\\n *     require(hasRole(MY_ROLE, msg.sender));\\n *     ...\\n * }\\n * ```\\n *\\n * Roles can be granted and revoked dynamically via the {grantRole} and\\n * {revokeRole} functions. Each role has an associated admin role, and only\\n * accounts that have a role\'s admin role can call {grantRole} and {revokeRole}.\\n *\\n * By default, the admin role for all roles is `DEFAULT_ADMIN_ROLE`, which means\\n * that only accounts with this role will be able to grant or revoke other\\n * roles. More complex role relationships can be created by using\\n * {_setRoleAdmin}.\\n *\\n * WARNING: The `DEFAULT_ADMIN_ROLE` is also its own admin: it has permission to\\n * grant and revoke this role. Extra precautions should be taken to secure\\n * accounts that have been granted it.\\n */\\nabstract contract AccessControl is Context, IAccessControl, ERC165 {\\n    struct RoleData {\\n        mapping(address => bool) members;\\n        bytes32 adminRole;\\n    }\\n\\n    mapping(bytes32 => RoleData) private _roles;\\n\\n    bytes32 public constant DEFAULT_ADMIN_ROLE = 0x00;\\n\\n    /**\\n     * @dev Modifier that checks that an account has a specific role. Reverts\\n     * with a standardized message including the required role.\\n     *\\n     * The format of the revert reason is given by the following regular expression:\\n     *\\n     *  /^AccessControl: account (0x[0-9a-f]{40}) is missing role (0x[0-9a-f]{64})$/\\n     *\\n     * _Available since v4.1._\\n     */\\n    modifier onlyRole(bytes32 role) {\\n        _checkRole(role, _msgSender());\\n        _;\\n    }\\n\\n    /**\\n     * @dev See {IERC165-supportsInterface}.\\n     */\\n    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\\n        return interfaceId == type(IAccessControl).interfaceId || super.supportsInterface(interfaceId);\\n    }\\n\\n    /**\\n     * @dev Returns `true` if `account` has been granted `role`.\\n     */\\n    function hasRole(bytes32 role, address account) public view override returns (bool) {\\n        return _roles[role].members[account];\\n    }\\n\\n    /**\\n     * @dev Revert with a standard message if `account` is missing `role`.\\n     *\\n     * The format of the revert reason is given by the following regular expression:\\n     *\\n     *  /^AccessControl: account (0x[0-9a-f]{40}) is missing role (0x[0-9a-f]{64})$/\\n     */\\n    function _checkRole(bytes32 role, address account) internal view {\\n        if (!hasRole(role, account)) {\\n            revert(\\n                string(\\n                    abi.encodePacked(\\n                        \\"AccessControl: account \\",\\n                        Strings.toHexString(uint160(account), 20),\\n                        \\" is missing role \\",\\n                        Strings.toHexString(uint256(role), 32)\\n                    )\\n                )\\n            );\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the admin role that controls `role`. See {grantRole} and\\n     * {revokeRole}.\\n     *\\n     * To change a role\'s admin, use {_setRoleAdmin}.\\n     */\\n    function getRoleAdmin(bytes32 role) public view override returns (bytes32) {\\n        return _roles[role].adminRole;\\n    }\\n\\n    /**\\n     * @dev Grants `role` to `account`.\\n     *\\n     * If `account` had not been already granted `role`, emits a {RoleGranted}\\n     * event.\\n     *\\n     * Requirements:\\n     *\\n     * - the caller must have ``role``\'s admin role.\\n     */\\n    function grantRole(bytes32 role, address account) public virtual override onlyRole(getRoleAdmin(role)) {\\n        _grantRole(role, account);\\n    }\\n\\n    /**\\n     * @dev Revokes `role` from `account`.\\n     *\\n     * If `account` had been granted `role`, emits a {RoleRevoked} event.\\n     *\\n     * Requirements:\\n     *\\n     * - the caller must have ``role``\'s admin role.\\n     */\\n    function revokeRole(bytes32 role, address account) public virtual override onlyRole(getRoleAdmin(role)) {\\n        _revokeRole(role, account);\\n    }\\n\\n    /**\\n     * @dev Revokes `role` from the calling account.\\n     *\\n     * Roles are often managed via {grantRole} and {revokeRole}: this function\'s\\n     * purpose is to provide a mechanism for accounts to lose their privileges\\n     * if they are compromised (such as when a trusted device is misplaced).\\n     *\\n     * If the calling account had been granted `role`, emits a {RoleRevoked}\\n     * event.\\n     *\\n     * Requirements:\\n     *\\n     * - the caller must be `account`.\\n     */\\n    function renounceRole(bytes32 role, address account) public virtual override {\\n        require(account == _msgSender(), \\"AccessControl: can only renounce roles for self\\");\\n\\n        _revokeRole(role, account);\\n    }\\n\\n    /**\\n     * @dev Grants `role` to `account`.\\n     *\\n     * If `account` had not been already granted `role`, emits a {RoleGranted}\\n     * event. Note that unlike {grantRole}, this function doesn\'t perform any\\n     * checks on the calling account.\\n     *\\n     * [WARNING]\\n     * ====\\n     * This function should only be called from the constructor when setting\\n     * up the initial roles for the system.\\n     *\\n     * Using this function in any other way is effectively circumventing the admin\\n     * system imposed by {AccessControl}.\\n     * ====\\n     */\\n    function _setupRole(bytes32 role, address account) internal virtual {\\n        _grantRole(role, account);\\n    }\\n\\n    /**\\n     * @dev Sets `adminRole` as ``role``\'s admin role.\\n     *\\n     * Emits a {RoleAdminChanged} event.\\n     */\\n    function _setRoleAdmin(bytes32 role, bytes32 adminRole) internal virtual {\\n        bytes32 previousAdminRole = getRoleAdmin(role);\\n        _roles[role].adminRole = adminRole;\\n        emit RoleAdminChanged(role, previousAdminRole, adminRole);\\n    }\\n\\n    function _grantRole(bytes32 role, address account) private {\\n        if (!hasRole(role, account)) {\\n            _roles[role].members[account] = true;\\n            emit RoleGranted(role, account, _msgSender());\\n        }\\n    }\\n\\n    function _revokeRole(bytes32 role, address account) private {\\n        if (hasRole(role, account)) {\\n            _roles[role].members[account] = false;\\n            emit RoleRevoked(role, account, _msgSender());\\n        }\\n    }\\n}\\n"\r\n' +
          '    },\r\n' +
          '    "@openzeppelin/contracts/token/ERC20/ERC20.sol": {\r\n' +
          '      "content": "// SPDX-License-Identifier: MIT\\n\\npragma solidity ^0.8.0;\\n\\nimport \\"./IERC20.sol\\";\\nimport \\"./extensions/IERC20Metadata.sol\\";\\nimport \\"../../utils/Context.sol\\";\\n\\n/**\\n * @dev Implementation of the {IERC20} interface.\\n *\\n * This implementation is agnostic to the way tokens are created. This means\\n * that a supply mechanism has to be added in a derived contract using {_mint}.\\n * For a generic mechanism see {ERC20PresetMinterPauser}.\\n *\\n * TIP: For a detailed writeup see our guide\\n * https://forum.zeppelin.solutions/t/how-to-implement-erc20-supply-mechanisms/226[How\\n * to implement supply mechanisms].\\n *\\n * We have followed general OpenZeppelin Contracts guidelines: functions revert\\n * instead returning `false` on failure. This behavior is nonetheless\\n * conventional and does not conflict with the expectations of ERC20\\n * applications.\\n *\\n * Additionally, an {Approval} event is emitted on calls to {transferFrom}.\\n * This allows applications to reconstruct the allowance for all accounts just\\n * by listening to said events. Other implementations of the EIP may not emit\\n * these events, as it isn\'t required by the specification.\\n *\\n * Finally, the non-standard {decreaseAllowance} and {increaseAllowance}\\n * functions have been added to mitigate the well-known issues around setting\\n * allowances. See {IERC20-approve}.\\n */\\ncontract ERC20 is Context, IERC20, IERC20Metadata {\\n    mapping(address => uint256) private _balances;\\n\\n    mapping(address => mapping(address => uint256)) private _allowances;\\n\\n    uint256 private _totalSupply;\\n\\n    string private _name;\\n    string private _symbol;\\n\\n    /**\\n     * @dev Sets the values for {name} and {symbol}.\\n     *\\n     * The default value of {decimals} is 18. To select a different value for\\n     * {decimals} you should overload it.\\n     *\\n     * All two of these values are immutable: they can only be set once during\\n     * construction.\\n     */\\n    constructor(string memory name_, string memory symbol_) {\\n        _name = name_;\\n        _symbol = symbol_;\\n    }\\n\\n    /**\\n     * @dev Returns the name of the token.\\n     */\\n    function name() public view virtual override returns (string memory) {\\n        return _name;\\n    }\\n\\n    /**\\n     * @dev Returns the symbol of the token, usually a shorter version of the\\n     * name.\\n     */\\n    function symbol() public view virtual override returns (string memory) {\\n        return _symbol;\\n    }\\n\\n    /**\\n     * @dev Returns the number of decimals used to get its user representation.\\n     * For example, if `decimals` equals `2`, a balance of `505` tokens should\\n     * be displayed to a user as `5.05` (`505 / 10 ** 2`).\\n     *\\n     * Tokens usually opt for a value of 18, imitating the relationship between\\n     * Ether and Wei. This is the value {ERC20} uses, unless this function is\\n     * overridden;\\n     *\\n     * NOTE: This information is only used for _display_ purposes: it in\\n     * no way affects any of the arithmetic of the contract, including\\n     * {IERC20-balanceOf} and {IERC20-transfer}.\\n     */\\n    function decimals() public view virtual override returns (uint8) {\\n        return 18;\\n    }\\n\\n    /**\\n     * @dev See {IERC20-totalSupply}.\\n     */\\n    function totalSupply() public view virtual override returns (uint256) {\\n        return _totalSupply;\\n    }\\n\\n    /**\\n     * @dev See {IERC20-balanceOf}.\\n     */\\n    function balanceOf(address account) public view virtual override returns (uint256) {\\n        return _balances[account];\\n    }\\n\\n    /**\\n     * @dev See {IERC20-transfer}.\\n     *\\n     * Requirements:\\n     *\\n     * - `recipient` cannot be the zero address.\\n     * - the caller must have a balance of at least `amount`.\\n     */\\n    function transfer(address recipient, uint256 amount) public virtual override returns (bool) {\\n        _transfer(_msgSender(), recipient, amount);\\n        return true;\\n    }\\n\\n    /**\\n     * @dev See {IERC20-allowance}.\\n     */\\n    function allowance(address owner, address spender) public view virtual override returns (uint256) {\\n        return _allowances[owner][spender];\\n    }\\n\\n    /**\\n     * @dev See {IERC20-approve}.\\n     *\\n     * Requirements:\\n     *\\n     * - `spender` cannot be the zero address.\\n     */\\n    function approve(address spender, uint256 amount) public virtual override returns (bool) {\\n        _approve(_msgSender(), spender, amount);\\n        return true;\\n    }\\n\\n    /**\\n     * @dev See {IERC20-transferFrom}.\\n     *\\n     * Emits an {Approval} event indicating the updated allowance. This is not\\n     * required by the EIP. See the note at the beginning of {ERC20}.\\n     *\\n     * Requirements:\\n     *\\n     * - `sender` and `recipient` cannot be the zero address.\\n     * - `sender` must have a balance of at least `amount`.\\n     * - the caller must have allowance for ``sender``\'s tokens of at least\\n     * `amount`.\\n     */\\n    function transferFrom(\\n        address sender,\\n        address recipient,\\n        uint256 amount\\n    ) public virtual override returns (bool) {\\n        _transfer(sender, recipient, amount);\\n\\n        uint256 currentAllowance = _allowances[sender][_msgSender()];\\n        require(currentAllowance >= amount, \\"ERC20: transfer amount exceeds allowance\\");\\n        unchecked {\\n            _approve(sender, _msgSender(), currentAllowance - amount);\\n        }\\n\\n        return true;\\n    }\\n\\n    /**\\n     * @dev Atomically increases the allowance granted to `spender` by the caller.\\n     *\\n     * This is an alternative to {approve} that can be used as a mitigation for\\n     * problems described in {IERC20-approve}.\\n     *\\n     * Emits an {Approval} event indicating the updated allowance.\\n     *\\n     * Requirements:\\n     *\\n     * - `spender` cannot be the zero address.\\n     */\\n    function increaseAllowance(address spender, uint256 addedValue) public virtual returns (bool) {\\n        _approve(_msgSender(), spender, _allowances[_msgSender()][spender] + addedValue);\\n        return true;\\n    }\\n\\n    /**\\n     * @dev Atomically decreases the allowance granted to `spender` by the caller.\\n     *\\n     * This is an alternative to {approve} that can be used as a mitigation for\\n     * problems described in {IERC20-approve}.\\n     *\\n     * Emits an {Approval} event indicating the updated allowance.\\n     *\\n     * Requirements:\\n     *\\n     * - `spender` cannot be the zero address.\\n     * - `spender` must have allowance for the caller of at least\\n     * `subtractedValue`.\\n     */\\n    function decreaseAllowance(address spender, uint256 subtractedValue) public virtual returns (bool) {\\n        uint256 currentAllowance = _allowances[_msgSender()][spender];\\n        require(currentAllowance >= subtractedValue, \\"ERC20: decreased allowance below zero\\");\\n        unchecked {\\n            _approve(_msgSender(), spender, currentAllowance - subtractedValue);\\n        }\\n\\n        return true;\\n    }\\n\\n    /**\\n     * @dev Moves `amount` of tokens from `sender` to `recipient`.\\n     *\\n     * This internal function is equivalent to {transfer}, and can be used to\\n     * e.g. implement automatic token fees, slashing mechanisms, etc.\\n     *\\n     * Emits a {Transfer} event.\\n     *\\n     * Requirements:\\n     *\\n     * - `sender` cannot be the zero address.\\n     * - `recipient` cannot be the zero address.\\n     * - `sender` must have a balance of at least `amount`.\\n     */\\n    function _transfer(\\n        address sender,\\n        address recipient,\\n        uint256 amount\\n    ) internal virtual {\\n        require(sender != address(0), \\"ERC20: transfer from the zero address\\");\\n        require(recipient != address(0), \\"ERC20: transfer to the zero address\\");\\n\\n        _beforeTokenTransfer(sender, recipient, amount);\\n\\n        uint256 senderBalance = _balances[sender];\\n        require(senderBalance >= amount, \\"ERC20: transfer amount exceeds balance\\");\\n        unchecked {\\n            _balances[sender] = senderBalance - amount;\\n        }\\n        _balances[recipient] += amount;\\n\\n        emit Transfer(sender, recipient, amount);\\n\\n        _afterTokenTransfer(sender, recipient, amount);\\n    }\\n\\n    /** @dev Creates `amount` tokens and assigns them to `account`, increasing\\n     * the total supply.\\n     *\\n     * Emits a {Transfer} event with `from` set to the zero address.\\n     *\\n     * Requirements:\\n     *\\n     * - `account` cannot be the zero address.\\n     */\\n    function _mint(address account, uint256 amount) internal virtual {\\n        require(account != address(0), \\"ERC20: mint to the zero address\\");\\n\\n        _beforeTokenTransfer(address(0), account, amount);\\n\\n        _totalSupply += amount;\\n        _balances[account] += amount;\\n        emit Transfer(address(0), account, amount);\\n\\n        _afterTokenTransfer(address(0), account, amount);\\n    }\\n\\n    /**\\n     * @dev Destroys `amount` tokens from `account`, reducing the\\n     * total supply.\\n     *\\n     * Emits a {Transfer} event with `to` set to the zero address.\\n     *\\n     * Requirements:\\n     *\\n     * - `account` cannot be the zero address.\\n     * - `account` must have at least `amount` tokens.\\n     */\\n    function _burn(address account, uint256 amount) internal virtual {\\n        require(account != address(0), \\"ERC20: burn from the zero address\\");\\n\\n        _beforeTokenTransfer(account, address(0), amount);\\n\\n        uint256 accountBalance = _balances[account];\\n        require(accountBalance >= amount, \\"ERC20: burn amount exceeds balance\\");\\n        unchecked {\\n            _balances[account] = accountBalance - amount;\\n        }\\n        _totalSupply -= amount;\\n\\n        emit Transfer(account, address(0), amount);\\n\\n        _afterTokenTransfer(account, address(0), amount);\\n    }\\n\\n    /**\\n     * @dev Sets `amount` as the allowance of `spender` over the `owner` s tokens.\\n     *\\n     * This internal function is equivalent to `approve`, and can be used to\\n     * e.g. set automatic allowances for certain subsystems, etc.\\n     *\\n     * Emits an {Approval} event.\\n     *\\n     * Requirements:\\n     *\\n     * - `owner` cannot be the zero address.\\n     * - `spender` cannot be the zero address.\\n     */\\n    function _approve(\\n        address owner,\\n        address spender,\\n        uint256 amount\\n    ) internal virtual {\\n        require(owner != address(0), \\"ERC20: approve from the zero address\\");\\n        require(spender != address(0), \\"ERC20: approve to the zero address\\");\\n\\n        _allowances[owner][spender] = amount;\\n        emit Approval(owner, spender, amount);\\n    }\\n\\n    /**\\n     * @dev Hook that is called before any transfer of tokens. This includes\\n     * minting and burning.\\n     *\\n     * Calling conditions:\\n     *\\n     * - when `from` and `to` are both non-zero, `amount` of ``from``\'s tokens\\n     * will be transferred to `to`.\\n     * - when `from` is zero, `amount` tokens will be minted for `to`.\\n     * - when `to` is zero, `amount` of ``from``\'s tokens will be burned.\\n     * - `from` and `to` are never both zero.\\n     *\\n     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].\\n     */\\n    function _beforeTokenTransfer(\\n        address from,\\n        address to,\\n        uint256 amount\\n    ) internal virtual {}\\n\\n    /**\\n     * @dev Hook that is called after any transfer of tokens. This includes\\n     * minting and burning.\\n     *\\n     * Calling conditions:\\n     *\\n     * - when `from` and `to` are both non-zero, `amount` of ``from``\'s tokens\\n     * has been transferred to `to`.\\n     * - when `from` is zero, `amount` tokens have been minted for `to`.\\n     * - when `to` is zero, `amount` of ``from``\'s tokens have been burned.\\n     * - `from` and `to` are never both zero.\\n     *\\n     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].\\n     */\\n    function _afterTokenTransfer(\\n        address from,\\n        address to,\\n        uint256 amount\\n    ) internal virtual {}\\n}\\n"\r\n' +
          '    },\r\n' +
          '    "@openzeppelin/contracts/token/ERC20/IERC20.sol": {\r\n' +
          '      "content": "// SPDX-License-Identifier: MIT\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Interface of the ERC20 standard as defined in the EIP.\\n */\\ninterface IERC20 {\\n    /**\\n     * @dev Returns the amount of tokens in existence.\\n     */\\n    function totalSupply() external view returns (uint256);\\n\\n    /**\\n     * @dev Returns the amount of tokens owned by `account`.\\n     */\\n    function balanceOf(address account) external view returns (uint256);\\n\\n    /**\\n     * @dev Moves `amount` tokens from the caller\'s account to `recipient`.\\n     *\\n     * Returns a boolean value indicating whether the operation succeeded.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function transfer(address recipient, uint256 amount) external returns (bool);\\n\\n    /**\\n     * @dev Returns the remaining number of tokens that `spender` will be\\n     * allowed to spend on behalf of `owner` through {transferFrom}. This is\\n     * zero by default.\\n     *\\n     * This value changes when {approve} or {transferFrom} are called.\\n     */\\n    function allowance(address owner, address spender) external view returns (uint256);\\n\\n    /**\\n     * @dev Sets `amount` as the allowance of `spender` over the caller\'s tokens.\\n     *\\n     * Returns a boolean value indicating whether the operation succeeded.\\n     *\\n     * IMPORTANT: Beware that changing an allowance with this method brings the risk\\n     * that someone may use both the old and the new allowance by unfortunate\\n     * transaction ordering. One possible solution to mitigate this race\\n     * condition is to first reduce the spender\'s allowance to 0 and set the\\n     * desired value afterwards:\\n     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\\n     *\\n     * Emits an {Approval} event.\\n     */\\n    function approve(address spender, uint256 amount) external returns (bool);\\n\\n    /**\\n     * @dev Moves `amount` tokens from `sender` to `recipient` using the\\n     * allowance mechanism. `amount` is then deducted from the caller\'s\\n     * allowance.\\n     *\\n     * Returns a boolean value indicating whether the operation succeeded.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function transferFrom(\\n        address sender,\\n        address recipient,\\n        uint256 amount\\n    ) external returns (bool);\\n\\n    /**\\n     * @dev Emitted when `value` tokens are moved from one account (`from`) to\\n     * another (`to`).\\n     *\\n     * Note that `value` may be zero.\\n     */\\n    event Transfer(address indexed from, address indexed to, uint256 value);\\n\\n    /**\\n     * @dev Emitted when the allowance of a `spender` for an `owner` is set by\\n     * a call to {approve}. `value` is the new allowance.\\n     */\\n    event Approval(address indexed owner, address indexed spender, uint256 value);\\n}\\n"\r\n' +
          '    },\r\n' +
          '    "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol": {\r\n' +
          '      "content": "// SPDX-License-Identifier: MIT\\n\\npragma solidity ^0.8.0;\\n\\nimport \\"../IERC20.sol\\";\\nimport \\"../../../utils/Address.sol\\";\\n\\n/**\\n * @title SafeERC20\\n * @dev Wrappers around ERC20 operations that throw on failure (when the token\\n * contract returns false). Tokens that return no value (and instead revert or\\n * throw on failure) are also supported, non-reverting calls are assumed to be\\n * successful.\\n * To use this library you can add a `using SafeERC20 for IERC20;` statement to your contract,\\n * which allows you to call the safe operations as `token.safeTransfer(...)`, etc.\\n */\\nlibrary SafeERC20 {\\n    using Address for address;\\n\\n    function safeTransfer(\\n        IERC20 token,\\n        address to,\\n        uint256 value\\n    ) internal {\\n        _callOptionalReturn(token, abi.encodeWithSelector(token.transfer.selector, to, value));\\n    }\\n\\n    function safeTransferFrom(\\n        IERC20 token,\\n        address from,\\n        address to,\\n        uint256 value\\n    ) internal {\\n        _callOptionalReturn(token, abi.encodeWithSelector(token.transferFrom.selector, from, to, value));\\n    }\\n\\n    /**\\n     * @dev Deprecated. This function has issues similar to the ones found in\\n     * {IERC20-approve}, and its usage is discouraged.\\n     *\\n     * Whenever possible, use {safeIncreaseAllowance} and\\n     * {safeDecreaseAllowance} instead.\\n     */\\n    function safeApprove(\\n        IERC20 token,\\n        address spender,\\n        uint256 value\\n    ) internal {\\n        // safeApprove should only be called when setting an initial allowance,\\n        // or when resetting it to zero. To increase and decrease it, use\\n        // \'safeIncreaseAllowance\' and \'safeDecreaseAllowance\'\\n        require(\\n            (value == 0) || (token.allowance(address(this), spender) == 0),\\n            \\"SafeERC20: approve from non-zero to non-zero allowance\\"\\n        );\\n        _callOptionalReturn(token, abi.encodeWithSelector(token.approve.selector, spender, value));\\n    }\\n\\n    function safeIncreaseAllowance(\\n        IERC20 token,\\n        address spender,\\n        uint256 value\\n    ) internal {\\n        uint256 newAllowance = token.allowance(address(this), spender) + value;\\n        _callOptionalReturn(token, abi.encodeWithSelector(token.approve.selector, spender, newAllowance));\\n    }\\n\\n    function safeDecreaseAllowance(\\n        IERC20 token,\\n        address spender,\\n        uint256 value\\n    ) internal {\\n        unchecked {\\n            uint256 oldAllowance = token.allowance(address(this), spender);\\n            require(oldAllowance >= value, \\"SafeERC20: decreased allowance below zero\\");\\n            uint256 newAllowance = oldAllowance - value;\\n            _callOptionalReturn(token, abi.encodeWithSelector(token.approve.selector, spender, newAllowance));\\n        }\\n    }\\n\\n    /**\\n     * @dev Imitates a Solidity high-level call (i.e. a regular function call to a contract), relaxing the requirement\\n     * on the return value: the return value is optional (but if data is returned, it must not be false).\\n     * @param token The token targeted by the call.\\n     * @param data The call data (encoded using abi.encode or one of its variants).\\n     */\\n    function _callOptionalReturn(IERC20 token, bytes memory data) private {\\n        // We need to perform a low level call here, to bypass Solidity\'s return data size checking mechanism, since\\n        // we\'re implementing it ourselves. We use {Address.functionCall} to perform this call, which verifies that\\n        // the target address contains contract code and also asserts for success in the low-level call.\\n\\n        bytes memory returndata = address(token).functionCall(data, \\"SafeERC20: low-level call failed\\");\\n        if (returndata.length > 0) {\\n            // Return data is optional\\n            require(abi.decode(returndata, (bool)), \\"SafeERC20: ERC20 operation did not succeed\\");\\n        }\\n    }\\n}\\n"\r\n' +
          '    },\r\n' +
          '    "@openzeppelin/contracts/security/ReentrancyGuard.sol": {\r\n' +
          '      "content": "// SPDX-License-Identifier: MIT\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Contract module that helps prevent reentrant calls to a function.\\n *\\n * Inheriting from `ReentrancyGuard` will make the {nonReentrant} modifier\\n * available, which can be applied to functions to make sure there are no nested\\n * (reentrant) calls to them.\\n *\\n * Note that because there is a single `nonReentrant` guard, functions marked as\\n * `nonReentrant` may not call one another. This can be worked around by making\\n * those functions `private`, and then adding `external` `nonReentrant` entry\\n * points to them.\\n *\\n * TIP: If you would like to learn more about reentrancy and alternative ways\\n * to protect against it, check out our blog post\\n * https://blog.openzeppelin.com/reentrancy-after-istanbul/[Reentrancy After Istanbul].\\n */\\nabstract contract ReentrancyGuard {\\n    // Booleans are more expensive than uint256 or any type that takes up a full\\n    // word because each write operation emits an extra SLOAD to first read the\\n    // slot\'s contents, replace the bits taken up by the boolean, and then write\\n    // back. This is the compiler\'s defense against contract upgrades and\\n    // pointer aliasing, and it cannot be disabled.\\n\\n    // The values being non-zero value makes deployment a bit more expensive,\\n    // but in exchange the refund on every call to nonReentrant will be lower in\\n    // amount. Since refunds are capped to a percentage of the total\\n    // transaction\'s gas, it is best to keep them low in cases like this one, to\\n    // increase the likelihood of the full refund coming into effect.\\n    uint256 private constant _NOT_ENTERED = 1;\\n    uint256 private constant _ENTERED = 2;\\n\\n    uint256 private _status;\\n\\n    constructor() {\\n        _status = _NOT_ENTERED;\\n    }\\n\\n    /**\\n     * @dev Prevents a contract from calling itself, directly or indirectly.\\n     * Calling a `nonReentrant` function from another `nonReentrant`\\n     * function is not supported. It is possible to prevent this from happening\\n     * by making the `nonReentrant` function external, and make it call a\\n     * `private` function that does the actual work.\\n     */\\n    modifier nonReentrant() {\\n        // On the first call to nonReentrant, _notEntered will be true\\n        require(_status != _ENTERED, \\"ReentrancyGuard: reentrant call\\");\\n\\n        // Any calls to nonReentrant after this point will fail\\n        _status = _ENTERED;\\n\\n        _;\\n\\n        // By storing the original value once again, a refund is triggered (see\\n        // https://eips.ethereum.org/EIPS/eip-2200)\\n        _status = _NOT_ENTERED;\\n    }\\n}\\n"\r\n' +
          '    },\r\n' +
          '    "@openzeppelin/contracts/access/IAccessControl.sol": {\r\n' +
          '      "content": "// SPDX-License-Identifier: MIT\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev External interface of AccessControl declared to support ERC165 detection.\\n */\\ninterface IAccessControl {\\n    /**\\n     * @dev Emitted when `newAdminRole` is set as ``role``\'s admin role, replacing `previousAdminRole`\\n     *\\n     * `DEFAULT_ADMIN_ROLE` is the starting admin for all roles, despite\\n     * {RoleAdminChanged} not being emitted signaling this.\\n     *\\n     * _Available since v3.1._\\n     */\\n    event RoleAdminChanged(bytes32 indexed role, bytes32 indexed previousAdminRole, bytes32 indexed newAdminRole);\\n\\n    /**\\n     * @dev Emitted when `account` is granted `role`.\\n     *\\n     * `sender` is the account that originated the contract call, an admin role\\n     * bearer except when using {AccessControl-_setupRole}.\\n     */\\n    event RoleGranted(bytes32 indexed role, address indexed account, address indexed sender);\\n\\n    /**\\n     * @dev Emitted when `account` is revoked `role`.\\n     *\\n     * `sender` is the account that originated the contract call:\\n     *   - if using `revokeRole`, it is the admin role bearer\\n     *   - if using `renounceRole`, it is the role bearer (i.e. `account`)\\n     */\\n    event RoleRevoked(bytes32 indexed role, address indexed account, address indexed sender);\\n\\n    /**\\n     * @dev Returns `true` if `account` has been granted `role`.\\n     */\\n    function hasRole(bytes32 role, address account) external view returns (bool);\\n\\n    /**\\n     * @dev Returns the admin role that controls `role`. See {grantRole} and\\n     * {revokeRole}.\\n     *\\n     * To change a role\'s admin, use {AccessControl-_setRoleAdmin}.\\n     */\\n    function getRoleAdmin(bytes32 role) external view returns (bytes32);\\n\\n    /**\\n     * @dev Grants `role` to `account`.\\n     *\\n     * If `account` had not been already granted `role`, emits a {RoleGranted}\\n     * event.\\n     *\\n     * Requirements:\\n     *\\n     * - the caller must have ``role``\'s admin role.\\n     */\\n    function grantRole(bytes32 role, address account) external;\\n\\n    /**\\n     * @dev Revokes `role` from `account`.\\n     *\\n     * If `account` had been granted `role`, emits a {RoleRevoked} event.\\n     *\\n     * Requirements:\\n     *\\n     * - the caller must have ``role``\'s admin role.\\n     */\\n    function revokeRole(bytes32 role, address account) external;\\n\\n    /**\\n     * @dev Revokes `role` from the calling account.\\n     *\\n     * Roles are often managed via {grantRole} and {revokeRole}: this function\'s\\n     * purpose is to provide a mechanism for accounts to lose their privileges\\n     * if they are compromised (such as when a trusted device is misplaced).\\n     *\\n     * If the calling account had been granted `role`, emits a {RoleRevoked}\\n     * event.\\n     *\\n     * Requirements:\\n     *\\n     * - the caller must be `account`.\\n     */\\n    function renounceRole(bytes32 role, address account) external;\\n}\\n"\r\n' +
          '    },\r\n' +
          '    "@openzeppelin/contracts/utils/Context.sol": {\r\n' +
          '      "content": "// SPDX-License-Identifier: MIT\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Provides information about the current execution context, including the\\n * sender of the transaction and its data. While these are generally available\\n * via msg.sender and msg.data, they should not be accessed in such a direct\\n * manner, since when dealing with meta-transactions the account sending and\\n * paying for execution may not be the actual sender (as far as an application\\n * is concerned).\\n *\\n * This contract is only required for intermediate, library-like contracts.\\n */\\nabstract contract Context {\\n    function _msgSender() internal view virtual returns (address) {\\n        return msg.sender;\\n    }\\n\\n    function _msgData() internal view virtual returns (bytes calldata) {\\n        return msg.data;\\n    }\\n}\\n"\r\n' +
          '    },\r\n' +
          '    "@openzeppelin/contracts/utils/Strings.sol": {\r\n' +
          '      "content": "// SPDX-License-Identifier: MIT\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev String operations.\\n */\\nlibrary Strings {\\n    bytes16 private constant _HEX_SYMBOLS = \\"0123456789abcdef\\";\\n\\n    /**\\n     * @dev Converts a `uint256` to its ASCII `string` decimal representation.\\n     */\\n    function toString(uint256 value) internal pure returns (string memory) {\\n        // Inspired by OraclizeAPI\'s implementation - MIT licence\\n        // https://github.com/oraclize/ethereum-api/blob/b42146b063c7d6ee1358846c198246239e9360e8/oraclizeAPI_0.4.25.sol\\n\\n        if (value == 0) {\\n            return \\"0\\";\\n        }\\n        uint256 temp = value;\\n        uint256 digits;\\n        while (temp != 0) {\\n            digits++;\\n            temp /= 10;\\n        }\\n        bytes memory buffer = new bytes(digits);\\n        while (value != 0) {\\n            digits -= 1;\\n            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));\\n            value /= 10;\\n        }\\n        return string(buffer);\\n    }\\n\\n    /**\\n     * @dev Converts a `uint256` to its ASCII `string` hexadecimal representation.\\n     */\\n    function toHexString(uint256 value) internal pure returns (string memory) {\\n        if (value == 0) {\\n            return \\"0x00\\";\\n        }\\n        uint256 temp = value;\\n        uint256 length = 0;\\n        while (temp != 0) {\\n            length++;\\n            temp >>= 8;\\n        }\\n        return toHexString(value, length);\\n    }\\n\\n    /**\\n     * @dev Converts a `uint256` to its ASCII `string` hexadecimal representation with fixed length.\\n     */\\n    function toHexString(uint256 value, uint256 length) internal pure returns (string memory) {\\n        bytes memory buffer = new bytes(2 * length + 2);\\n        buffer[0] = \\"0\\";\\n        buffer[1] = \\"x\\";\\n        for (uint256 i = 2 * length + 1; i > 1; --i) {\\n            buffer[i] = _HEX_SYMBOLS[value & 0xf];\\n            value >>= 4;\\n        }\\n        require(value == 0, \\"Strings: hex length insufficient\\");\\n        return string(buffer);\\n    }\\n}\\n"\r\n' +
          '    },\r\n' +
          '    "@openzeppelin/contracts/utils/introspection/ERC165.sol": {\r\n' +
          '      "content": "// SPDX-License-Identifier: MIT\\n\\npragma solidity ^0.8.0;\\n\\nimport \\"./IERC165.sol\\";\\n\\n/**\\n * @dev Implementation of the {IERC165} interface.\\n *\\n * Contracts that want to implement ERC165 should inherit from this contract and override {supportsInterface} to check\\n * for the additional interface id that will be supported. For example:\\n *\\n * ```solidity\\n * function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\\n *     return interfaceId == type(MyInterface).interfaceId || super.supportsInterface(interfaceId);\\n * }\\n * ```\\n *\\n * Alternatively, {ERC165Storage} provides an easier to use but more expensive implementation.\\n */\\nabstract contract ERC165 is IERC165 {\\n    /**\\n     * @dev See {IERC165-supportsInterface}.\\n     */\\n    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\\n        return interfaceId == type(IERC165).interfaceId;\\n    }\\n}\\n"\r\n' +
          '    },\r\n' +
          '    "@openzeppelin/contracts/utils/introspection/IERC165.sol": {\r\n' +
          '      "content": "// SPDX-License-Identifier: MIT\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Interface of the ERC165 standard, as defined in the\\n * https://eips.ethereum.org/EIPS/eip-165[EIP].\\n *\\n * Implementers can declare support of contract interfaces, which can then be\\n * queried by others ({ERC165Checker}).\\n *\\n * For an implementation, see {ERC165}.\\n */\\ninterface IERC165 {\\n    /**\\n     * @dev Returns true if this contract implements the interface defined by\\n     * `interfaceId`. See the corresponding\\n     * https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]\\n     * to learn more about how these ids are created.\\n     *\\n     * This function call must use less than 30 000 gas.\\n     */\\n    function supportsInterface(bytes4 interfaceId) external view returns (bool);\\n}\\n"\r\n' +
          '    },\r\n' +
          '    "@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol": {\r\n' +
          '      "content": "// SPDX-License-Identifier: MIT\\n\\npragma solidity ^0.8.0;\\n\\nimport \\"../IERC20.sol\\";\\n\\n/**\\n * @dev Interface for the optional metadata functions from the ERC20 standard.\\n *\\n * _Available since v4.1._\\n */\\ninterface IERC20Metadata is IERC20 {\\n    /**\\n     * @dev Returns the name of the token.\\n     */\\n    function name() external view returns (string memory);\\n\\n    /**\\n     * @dev Returns the symbol of the token.\\n     */\\n    function symbol() external view returns (string memory);\\n\\n    /**\\n     * @dev Returns the decimals places of the token.\\n     */\\n    function decimals() external view returns (uint8);\\n}\\n"\r\n' +
          '    },\r\n' +
          '    "@openzeppelin/contracts/utils/Address.sol": {\r\n' +
          '      "content": "// SPDX-License-Identifier: MIT\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Collection of functions related to the address type\\n */\\nlibrary Address {\\n    /**\\n     * @dev Returns true if `account` is a contract.\\n     *\\n     * [IMPORTANT]\\n     * ====\\n     * It is unsafe to assume that an address for which this function returns\\n     * false is an externally-owned account (EOA) and not a contract.\\n     *\\n     * Among others, `isContract` will return false for the following\\n     * types of addresses:\\n     *\\n     *  - an externally-owned account\\n     *  - a contract in construction\\n     *  - an address where a contract will be created\\n     *  - an address where a contract lived, but was destroyed\\n     * ====\\n     */\\n    function isContract(address account) internal view returns (bool) {\\n        // This method relies on extcodesize, which returns 0 for contracts in\\n        // construction, since the code is only stored at the end of the\\n        // constructor execution.\\n\\n        uint256 size;\\n        assembly {\\n            size := extcodesize(account)\\n        }\\n        return size > 0;\\n    }\\n\\n    /**\\n     * @dev Replacement for Solidity\'s `transfer`: sends `amount` wei to\\n     * `recipient`, forwarding all available gas and reverting on errors.\\n     *\\n     * https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost\\n     * of certain opcodes, possibly making contracts go over the 2300 gas limit\\n     * imposed by `transfer`, making them unable to receive funds via\\n     * `transfer`. {sendValue} removes this limitation.\\n     *\\n     * https://diligence.consensys.net/posts/2019/09/stop-using-soliditys-transfer-now/[Learn more].\\n     *\\n     * IMPORTANT: because control is transferred to `recipient`, care must be\\n     * taken to not create reentrancy vulnerabilities. Consider using\\n     * {ReentrancyGuard} or the\\n     * https://solidity.readthedocs.io/en/v0.5.11/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern].\\n     */\\n    function sendValue(address payable recipient, uint256 amount) internal {\\n        require(address(this).balance >= amount, \\"Address: insufficient balance\\");\\n\\n        (bool success, ) = recipient.call{value: amount}(\\"\\");\\n        require(success, \\"Address: unable to send value, recipient may have reverted\\");\\n    }\\n\\n    /**\\n     * @dev Performs a Solidity function call using a low level `call`. A\\n     * plain `call` is an unsafe replacement for a function call: use this\\n     * function instead.\\n     *\\n     * If `target` reverts with a revert reason, it is bubbled up by this\\n     * function (like regular Solidity function calls).\\n     *\\n     * Returns the raw returned data. To convert to the expected return value,\\n     * use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[`abi.decode`].\\n     *\\n     * Requirements:\\n     *\\n     * - `target` must be a contract.\\n     * - calling `target` with `data` must not revert.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCall(address target, bytes memory data) internal returns (bytes memory) {\\n        return functionCall(target, data, \\"Address: low-level call failed\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`], but with\\n     * `errorMessage` as a fallback revert reason when `target` reverts.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCall(\\n        address target,\\n        bytes memory data,\\n        string memory errorMessage\\n    ) internal returns (bytes memory) {\\n        return functionCallWithValue(target, data, 0, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but also transferring `value` wei to `target`.\\n     *\\n     * Requirements:\\n     *\\n     * - the calling contract must have an ETH balance of at least `value`.\\n     * - the called Solidity function must be `payable`.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCallWithValue(\\n        address target,\\n        bytes memory data,\\n        uint256 value\\n    ) internal returns (bytes memory) {\\n        return functionCallWithValue(target, data, value, \\"Address: low-level call with value failed\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCallWithValue-address-bytes-uint256-}[`functionCallWithValue`], but\\n     * with `errorMessage` as a fallback revert reason when `target` reverts.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCallWithValue(\\n        address target,\\n        bytes memory data,\\n        uint256 value,\\n        string memory errorMessage\\n    ) internal returns (bytes memory) {\\n        require(address(this).balance >= value, \\"Address: insufficient balance for call\\");\\n        require(isContract(target), \\"Address: call to non-contract\\");\\n\\n        (bool success, bytes memory returndata) = target.call{value: value}(data);\\n        return verifyCallResult(success, returndata, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but performing a static call.\\n     *\\n     * _Available since v3.3._\\n     */\\n    function functionStaticCall(address target, bytes memory data) internal view returns (bytes memory) {\\n        return functionStaticCall(target, data, \\"Address: low-level static call failed\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\\n     * but performing a static call.\\n     *\\n     * _Available since v3.3._\\n     */\\n    function functionStaticCall(\\n        address target,\\n        bytes memory data,\\n        string memory errorMessage\\n    ) internal view returns (bytes memory) {\\n        require(isContract(target), \\"Address: static call to non-contract\\");\\n\\n        (bool success, bytes memory returndata) = target.staticcall(data);\\n        return verifyCallResult(success, returndata, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but performing a delegate call.\\n     *\\n     * _Available since v3.4._\\n     */\\n    function functionDelegateCall(address target, bytes memory data) internal returns (bytes memory) {\\n        return functionDelegateCall(target, data, \\"Address: low-level delegate call failed\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\\n     * but performing a delegate call.\\n     *\\n     * _Available since v3.4._\\n     */\\n    function functionDelegateCall(\\n        address target,\\n        bytes memory data,\\n        string memory errorMessage\\n    ) internal returns (bytes memory) {\\n        require(isContract(target), \\"Address: delegate call to non-contract\\");\\n\\n        (bool success, bytes memory returndata) = target.delegatecall(data);\\n        return verifyCallResult(success, returndata, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Tool to verifies that a low level call was successful, and revert if it wasn\'t, either by bubbling the\\n     * revert reason using the provided one.\\n     *\\n     * _Available since v4.3._\\n     */\\n    function verifyCallResult(\\n        bool success,\\n        bytes memory returndata,\\n        string memory errorMessage\\n    ) internal pure returns (bytes memory) {\\n        if (success) {\\n            return returndata;\\n        } else {\\n            // Look for revert reason and bubble it up if present\\n            if (returndata.length > 0) {\\n                // The easiest way to bubble the revert reason is using memory via assembly\\n\\n                assembly {\\n                    let returndata_size := mload(returndata)\\n                    revert(add(32, returndata), returndata_size)\\n                }\\n            } else {\\n                revert(errorMessage);\\n            }\\n        }\\n    }\\n}\\n"\r\n' +
          '    }\r\n' +
          '  },\r\n' +
          '  "settings": {\r\n' +
          '    "optimizer": {\r\n' +
          '      "enabled": true,\r\n' +
          '      "runs": 1000\r\n' +
          '    },\r\n' +
          '    "outputSelection": {\r\n' +
          '      "*": {\r\n' +
          '        "*": [\r\n' +
          '          "evm.bytecode",\r\n' +
          '          "evm.deployedBytecode",\r\n' +
          '          "abi"\r\n' +
          '        ]\r\n' +
          '      }\r\n' +
          '    },\r\n' +
          '    "libraries": {}\r\n' +
          '  }\r\n' +
          '}}',
        ABI: '[{"inputs":[{"internalType":"address","name":"_arbisToken","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"rps","type":"uint256"},{"indexed":false,"internalType":"bool","name":"intern","type":"bool"}],"name":"RewardAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"address","name":"addr","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardCollection","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"addr","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Stake","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"addr","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawal","type":"event"},{"inputs":[],"name":"ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SCALE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"addApprovedRewardToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"addReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"arbisToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"collectRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"earlyWithdrawalDistributeShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"earlyWithdrawalFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"earlyWithdrawalSecondsThreshold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"excessTokenRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeDestination","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"getAvailableTokenRewards","outputs":[{"internalType":"uint256","name":"totalRewards","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNumberOfStakeholders","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isApprovedRewardToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastStakeTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"paidCumTokenRewardsPerStake","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"recoverEth","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"removeApprovedRewardToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"rewardTokens","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"setEarlyWithdrawalDistributeShare","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"fee","type":"uint256"}],"name":"setEarlyWithdrawalFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"threshold","type":"uint256"}],"name":"setEarlyWithdrawalSecondsThreshold","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"dest","type":"address"}],"name":"setFeeDestination","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_scale","type":"uint256"}],"name":"setScale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakedBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakeholderInfo","outputs":[{"internalType":"bool","name":"exists","type":"bool"},{"internalType":"uint256","name":"idx","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"stakeholders","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"totalCumTokenRewardsPerStake","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStaked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawExcessRewards","outputs":[],"stateMutability":"nonpayable","type":"function"}]',
        ContractName: 'stARBIS',
        CompilerVersion: 'v0.8.4+commit.c7e474f2',
        OptimizationUsed: '1',
        Runs: '1000',
        ConstructorArguments: '0000000000000000000000009f20de1fc9b161b34089cbeae888168b44b03461',
        EVMVersion: 'Default',
        Library: '',
        LicenseType: '',
        Proxy: '0',
        Implementation: '',
        SwarmSource: ''
      }
    ]
  }
  const polygonData = {
    status: '1',
    message: 'OK-Missing/Invalid API Key, rate limit of 1/5sec applied',
    result: [
      {
        SourceCode: '// SPDX-License-Identifier: MIT\r\n' +
          '\r\n' +
          'pragma solidity 0.8.9;\r\n' +
          '// import "hardhat/console.sol";\r\n' +
          '\r\n' +
          '/*\r\n' +
          ' * @dev Provides information about the current execution context, including the\r\n' +
          ' * sender of the transaction and its data. While these are generally available\r\n' +
          ' * via msg.sender and msg.data, they should not be accessed in such a direct\r\n' +
          ' * manner, since when dealing with meta-transactions the account sending and\r\n' +
          ' * paying for execution may not be the actual sender (as far as an application\r\n' +
          ' * is concerned).\r\n' +
          ' *\r\n' +
          ' * This contract is only required for intermediate, library-like contracts.\r\n' +
          ' */\r\n' +
          'abstract contract Context {\r\n' +
          '    function _msgSender() internal view virtual returns (address) {\r\n' +
          '        return msg.sender;\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    function _msgData() internal view virtual returns (bytes calldata) {\r\n' +
          '        this; // silence state mutability warning without generating bytecode - see https://github.com/ethereum/solidity/issues/2691\r\n' +
          '        return msg.data;\r\n' +
          '    }\r\n' +
          '}\r\n' +
          '\r\n' +
          '/**\r\n' +
          ' * @dev Contract module which provides a basic access control mechanism, where\r\n' +
          ' * there is an account (an owner) that can be granted exclusive access to\r\n' +
          ' * specific functions.\r\n' +
          ' *\r\n' +
          ' * By default, the owner account will be the one that deploys the contract. This\r\n' +
          ' * can later be changed with {transferOwnership}.\r\n' +
          ' *\r\n' +
          ' * This module is used through inheritance. It will make available the modifier\r\n' +
          ' * `onlyOwner`, which can be applied to your functions to restrict their use to\r\n' +
          ' * the owner.\r\n' +
          ' */\r\n' +
          'abstract contract Ownable is Context {\r\n' +
          '    address private _owner;\r\n' +
          '\r\n' +
          '    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);\r\n' +
          '\r\n' +
          '    /**\r\n' +
          '     * @dev Initializes the contract setting the deployer as the initial owner.\r\n' +
          '     */\r\n' +
          '    constructor () {\r\n' +
          '        address msgSender = _msgSender();\r\n' +
          '        _owner = msgSender;\r\n' +
          '        emit OwnershipTransferred(address(0), msgSender);\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    /**\r\n' +
          '     * @dev Returns the address of the current owner.\r\n' +
          '     */\r\n' +
          '    function owner() public view virtual returns (address) {\r\n' +
          '        return _owner;\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    /**\r\n' +
          '     * @dev Throws if called by any account other than the owner.\r\n' +
          '     */\r\n' +
          '    modifier onlyOwner() {\r\n' +
          '        require(owner() == _msgSender(), "Ownable: caller is not the owner");\r\n' +
          '        _;\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    /**\r\n' +
          '     * @dev Leaves the contract without owner. It will not be possible to call\r\n' +
          '     * `onlyOwner` functions anymore. Can only be called by the current owner.\r\n' +
          '     *\r\n' +
          '     * NOTE: Renouncing ownership will leave the contract without an owner,\r\n' +
          '     * thereby removing any functionality that is only available to the owner.\r\n' +
          '     */\r\n' +
          '    function renounceOwnership() public virtual onlyOwner {\r\n' +
          '        emit OwnershipTransferred(_owner, address(0));\r\n' +
          '        _owner = address(0);\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    /**\r\n' +
          '     * @dev Transfers ownership of the contract to a new account (`newOwner`).\r\n' +
          '     * Can only be called by the current owner.\r\n' +
          '     */\r\n' +
          '    function transferOwnership(address newOwner) public virtual onlyOwner {\r\n' +
          '        require(newOwner != address(0), "Ownable: new owner is the zero address");\r\n' +
          '        emit OwnershipTransferred(_owner, newOwner);\r\n' +
          '        _owner = newOwner;\r\n' +
          '    }\r\n' +
          '}\r\n' +
          '\r\n' +
          '\r\n' +
          'interface IERC20 {\r\n' +
          '    /**\r\n' +
          '     * @dev Returns the amount of tokens in existence.\r\n' +
          '     */\r\n' +
          '    function totalSupply() external view returns (uint256);\r\n' +
          '\r\n' +
          '    /**\r\n' +
          '     * @dev Returns the amount of tokens owned by `account`.\r\n' +
          '     */\r\n' +
          '    function balanceOf(address account) external view returns (uint256);\r\n' +
          '\r\n' +
          '    /**\r\n' +
          "     * @dev Moves `amount` tokens from the caller's account to `recipient`.\r\n" +
          '     *\r\n' +
          '     * Returns a boolean value indicating whether the operation succeeded.\r\n' +
          '     *\r\n' +
          '     * Emits a {Transfer} event.\r\n' +
          '     */\r\n' +
          '    function transfer(address recipient, uint256 amount) external returns (bool);\r\n' +
          '\r\n' +
          '    /**\r\n' +
          '     * @dev Returns the remaining number of tokens that `spender` will be\r\n' +
          '     * allowed to spend on behalf of `owner` through {transferFrom}. This is\r\n' +
          '     * zero by default.\r\n' +
          '     *\r\n' +
          '     * This value changes when {approve} or {transferFrom} are called.\r\n' +
          '     */\r\n' +
          '    function allowance(address owner, address spender) external view returns (uint256);\r\n' +
          '\r\n' +
          '    /**\r\n' +
          "     * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.\r\n" +
          '     *\r\n' +
          '     * Returns a boolean value indicating whether the operation succeeded.\r\n' +
          '     *\r\n' +
          '     * IMPORTANT: Beware that changing an allowance with this method brings the risk\r\n' +
          '     * that someone may use both the old and the new allowance by unfortunate\r\n' +
          '     * transaction ordering. One possible solution to mitigate this race\r\n' +
          "     * condition is to first reduce the spender's allowance to 0 and set the\r\n" +
          '     * desired value afterwards:\r\n' +
          '     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\r\n' +
          '     *\r\n' +
          '     * Emits an {Approval} event.\r\n' +
          '     */\r\n' +
          '    function approve(address spender, uint256 amount) external returns (bool);\r\n' +
          '\r\n' +
          '    /**\r\n' +
          '     * @dev Moves `amount` tokens from `sender` to `recipient` using the\r\n' +
          "     * allowance mechanism. `amount` is then deducted from the caller's\r\n" +
          '     * allowance.\r\n' +
          '     *\r\n' +
          '     * Returns a boolean value indicating whether the operation succeeded.\r\n' +
          '     *\r\n' +
          '     * Emits a {Transfer} event.\r\n' +
          '     */\r\n' +
          '    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);\r\n' +
          '\r\n' +
          '    /**\r\n' +
          '     * @dev Emitted when `value` tokens are moved from one account (`from`) to\r\n' +
          '     * another (`to`).\r\n' +
          '     *\r\n' +
          '     * Note that `value` may be zero.\r\n' +
          '     */\r\n' +
          '    event Transfer(address indexed from, address indexed to, uint256 value);\r\n' +
          '\r\n' +
          '    /**\r\n' +
          '     * @dev Emitted when the allowance of a `spender` for an `owner` is set by\r\n' +
          '     * a call to {approve}. `value` is the new allowance.\r\n' +
          '     */\r\n' +
          '    event Approval(address indexed owner, address indexed spender, uint256 value);\r\n' +
          '}\r\n' +
          '\r\n' +
          '\r\n' +
          '/**\r\n' +
          ' * @dev Interface for the optional metadata functions from the ERC20 standard.\r\n' +
          ' *\r\n' +
          ' * _Available since v4.1._\r\n' +
          ' */\r\n' +
          'interface IERC20Metadata is IERC20 {\r\n' +
          '    /**\r\n' +
          '     * @dev Returns the name of the token.\r\n' +
          '     */\r\n' +
          '    function name() external view returns (string memory);\r\n' +
          '\r\n' +
          '    /**\r\n' +
          '     * @dev Returns the symbol of the token.\r\n' +
          '     */\r\n' +
          '    function symbol() external view returns (string memory);\r\n' +
          '\r\n' +
          '    /**\r\n' +
          '     * @dev Returns the decimals places of the token.\r\n' +
          '     */\r\n' +
          '    function decimals() external view returns (uint8);\r\n' +
          '}\r\n' +
          '\r\n' +
          '\r\n' +
          '/**\r\n' +
          ' * @dev Implementation of the {IERC20} interface.\r\n' +
          ' *\r\n' +
          ' * This implementation is agnostic to the way tokens are created. This means\r\n' +
          ' * that a supply mechanism has to be added in a derived contract using {_mint}.\r\n' +
          ' * For a generic mechanism see {ERC20PresetMinterPauser}.\r\n' +
          ' *\r\n' +
          ' * TIP: For a detailed writeup see our guide\r\n' +
          ' * https://forum.zeppelin.solutions/t/how-to-implement-erc20-supply-mechanisms/226[How\r\n' +
          ' * to implement supply mechanisms].\r\n' +
          ' *\r\n' +
          ' * We have followed general OpenZeppelin guidelines: functions revert instead\r\n' +
          ' * of returning `false` on failure. This behavior is nonetheless conventional\r\n' +
          ' * and does not conflict with the expectations of ERC20 applications.\r\n' +
          ' *\r\n' +
          ' * Additionally, an {Approval} event is emitted on calls to {transferFrom}.\r\n' +
          ' * This allows applications to reconstruct the allowance for all accounts just\r\n' +
          ' * by listening to said events. Other implementations of the EIP may not emit\r\n' +
          " * these events, as it isn't required by the specification.\r\n" +
          ' *\r\n' +
          ' * Finally, the non-standard {decreaseAllowance} and {increaseAllowance}\r\n' +
          ' * functions have been added to mitigate the well-known issues around setting\r\n' +
          ' * allowances. See {IERC20-approve}.\r\n' +
          ' */\r\n' +
          'contract ERC20 is Context, IERC20, IERC20Metadata {\r\n' +
          '    mapping (address => uint256) private _balances;\r\n' +
          '\r\n' +
          '    mapping (address => mapping (address => uint256)) private _allowances;\r\n' +
          '\r\n' +
          '    uint256 private _totalSupply;\r\n' +
          '\r\n' +
          '    string private _name;\r\n' +
          '    string private _symbol;\r\n' +
          '\r\n' +
          '    /**\r\n' +
          '     * @dev Sets the values for {name} and {symbol}.\r\n' +
          '     *\r\n' +
          '     * The default value of {decimals} is 18. To select a different value for\r\n' +
          '     * {decimals} you should overload it.\r\n' +
          '     *\r\n' +
          '     * All two of these values are immutable: they can only be set once during\r\n' +
          '     * construction.\r\n' +
          '     */\r\n' +
          '    constructor (string memory name_, string memory symbol_) {\r\n' +
          '        _name = name_;\r\n' +
          '        _symbol = symbol_;\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    /**\r\n' +
          '     * @dev Returns the name of the token.\r\n' +
          '     */\r\n' +
          '    function name() public view virtual override returns (string memory) {\r\n' +
          '        return _name;\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    /**\r\n' +
          '     * @dev Returns the symbol of the token, usually a shorter version of the\r\n' +
          '     * name.\r\n' +
          '     */\r\n' +
          '    function symbol() public view virtual override returns (string memory) {\r\n' +
          '        return _symbol;\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    /**\r\n' +
          '     * @dev Returns the number of decimals used to get its user representation.\r\n' +
          '     * For example, if `decimals` equals `2`, a balance of `505` tokens should\r\n' +
          '     * be displayed to a user as `5,05` (`505 / 10 ** 2`).\r\n' +
          '     *\r\n' +
          '     * Tokens usually opt for a value of 18, imitating the relationship between\r\n' +
          '     * Ether and Wei. This is the value {ERC20} uses, unless this function is\r\n' +
          '     * overridden;\r\n' +
          '     *\r\n' +
          '     * NOTE: This information is only used for _display_ purposes: it in\r\n' +
          '     * no way affects any of the arithmetic of the contract, including\r\n' +
          '     * {IERC20-balanceOf} and {IERC20-transfer}.\r\n' +
          '     */\r\n' +
          '    function decimals() public view virtual override returns (uint8) {\r\n' +
          '        return 18;\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    /**\r\n' +
          '     * @dev See {IERC20-totalSupply}.\r\n' +
          '     */\r\n' +
          '    function totalSupply() public view virtual override returns (uint256) {\r\n' +
          '        return _totalSupply;\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    /**\r\n' +
          '     * @dev See {IERC20-balanceOf}.\r\n' +
          '     */\r\n' +
          '    function balanceOf(address account) public view virtual override returns (uint256) {\r\n' +
          '        return _balances[account];\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    /**\r\n' +
          '     * @dev See {IERC20-transfer}.\r\n' +
          '     *\r\n' +
          '     * Requirements:\r\n' +
          '     *\r\n' +
          '     * - `recipient` cannot be the zero address.\r\n' +
          '     * - the caller must have a balance of at least `amount`.\r\n' +
          '     */\r\n' +
          '    function transfer(address recipient, uint256 amount) public virtual override returns (bool) {\r\n' +
          '        _transfer(_msgSender(), recipient, amount);\r\n' +
          '        return true;\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    /**\r\n' +
          '     * @dev See {IERC20-allowance}.\r\n' +
          '     */\r\n' +
          '    function allowance(address owner, address spender) public view virtual override returns (uint256) {\r\n' +
          '        return _allowances[owner][spender];\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    /**\r\n' +
          '     * @dev See {IERC20-approve}.\r\n' +
          '     *\r\n' +
          '     * Requirements:\r\n' +
          '     *\r\n' +
          '     * - `spender` cannot be the zero address.\r\n' +
          '     */\r\n' +
          '    function approve(address spender, uint256 amount) public virtual override returns (bool) {\r\n' +
          '        _approve(_msgSender(), spender, amount);\r\n' +
          '        return true;\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    /**\r\n' +
          '     * @dev See {IERC20-transferFrom}.\r\n' +
          '     *\r\n' +
          '     * Emits an {Approval} event indicating the updated allowance. This is not\r\n' +
          '     * required by the EIP. See the note at the beginning of {ERC20}.\r\n' +
          '     *\r\n' +
          '     * Requirements:\r\n' +
          '     *\r\n' +
          '     * - `sender` and `recipient` cannot be the zero address.\r\n' +
          '     * - `sender` must have a balance of at least `amount`.\r\n' +
          "     * - the caller must have allowance for ``sender``'s tokens of at least\r\n" +
          '     * `amount`.\r\n' +
          '     */\r\n' +
          '    function transferFrom(address sender, address recipient, uint256 amount) public virtual override returns (bool) {\r\n' +
          '        _transfer(sender, recipient, amount);\r\n' +
          '\r\n' +
          '        uint256 currentAllowance = _allowances[sender][_msgSender()];\r\n' +
          '        require(currentAllowance >= amount, "ERC20: transfer amount exceeds allowance");\r\n' +
          '        unchecked {\r\n' +
          '            _approve(sender, _msgSender(), currentAllowance - amount);\r\n' +
          '    }\r\n' +
          '\r\n' +
          '        return true;\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    /**\r\n' +
          '     * @dev Atomically increases the allowance granted to `spender` by the caller.\r\n' +
          '     *\r\n' +
          '     * This is an alternative to {approve} that can be used as a mitigation for\r\n' +
          '     * problems described in {IERC20-approve}.\r\n' +
          '     *\r\n' +
          '     * Emits an {Approval} event indicating the updated allowance.\r\n' +
          '     *\r\n' +
          '     * Requirements:\r\n' +
          '     *\r\n' +
          '     * - `spender` cannot be the zero address.\r\n' +
          '     */\r\n' +
          '    function increaseAllowance(address spender, uint256 addedValue) public virtual returns (bool) {\r\n' +
          '        _approve(_msgSender(), spender, _allowances[_msgSender()][spender] + addedValue);\r\n' +
          '        return true;\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    /**\r\n' +
          '     * @dev Atomically decreases the allowance granted to `spender` by the caller.\r\n' +
          '     *\r\n' +
          '     * This is an alternative to {approve} that can be used as a mitigation for\r\n' +
          '     * problems described in {IERC20-approve}.\r\n' +
          '     *\r\n' +
          '     * Emits an {Approval} event indicating the updated allowance.\r\n' +
          '     *\r\n' +
          '     * Requirements:\r\n' +
          '     *\r\n' +
          '     * - `spender` cannot be the zero address.\r\n' +
          '     * - `spender` must have allowance for the caller of at least\r\n' +
          '     * `subtractedValue`.\r\n' +
          '     */\r\n' +
          '    function decreaseAllowance(address spender, uint256 subtractedValue) public virtual returns (bool) {\r\n' +
          '        uint256 currentAllowance = _allowances[_msgSender()][spender];\r\n' +
          '        require(currentAllowance >= subtractedValue, "ERC20: decreased allowance below zero");\r\n' +
          '        unchecked {\r\n' +
          '    _approve(_msgSender(), spender, currentAllowance - subtractedValue);\r\n' +
          '    }\r\n' +
          '\r\n' +
          '        return true;\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    /**\r\n' +
          '     * @dev Moves tokens `amount` from `sender` to `recipient`.\r\n' +
          '     *\r\n' +
          '     * This is internal function is equivalent to {transfer}, and can be used to\r\n' +
          '     * e.g. implement automatic token fees, slashing mechanisms, etc.\r\n' +
          '     *\r\n' +
          '     * Emits a {Transfer} event.\r\n' +
          '     *\r\n' +
          '     * Requirements:\r\n' +
          '     *\r\n' +
          '     * - `sender` cannot be the zero address.\r\n' +
          '     * - `recipient` cannot be the zero address.\r\n' +
          '     * - `sender` must have a balance of at least `amount`.\r\n' +
          '     */\r\n' +
          '    function _transfer(address sender, address recipient, uint256 amount) internal virtual {\r\n' +
          '        require(sender != address(0), "ERC20: transfer from the zero address");\r\n' +
          '        require(recipient != address(0), "ERC20: transfer to the zero address");\r\n' +
          '\r\n' +
          '        _beforeTokenTransfer(sender, recipient, amount);\r\n' +
          '\r\n' +
          '        uint256 senderBalance = _balances[sender];\r\n' +
          '        require(senderBalance >= amount, "ERC20: transfer amount exceeds balance");\r\n' +
          '        unchecked {\r\n' +
          '    _balances[sender] = senderBalance - amount;\r\n' +
          '    }\r\n' +
          '        _balances[recipient] += amount;\r\n' +
          '\r\n' +
          '        emit Transfer(sender, recipient, amount);\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    /** @dev Creates `amount` tokens and assigns them to `account`, increasing\r\n' +
          '     * the total supply.\r\n' +
          '     *\r\n' +
          '     * Emits a {Transfer} event with `from` set to the zero address.\r\n' +
          '     *\r\n' +
          '     * Requirements:\r\n' +
          '     *\r\n' +
          '     * - `account` cannot be the zero address.\r\n' +
          '     */\r\n' +
          '    function _mint(address account, uint256 amount) internal virtual {\r\n' +
          '        require(account != address(0), "ERC20: mint to the zero address");\r\n' +
          '\r\n' +
          '        _beforeTokenTransfer(address(0), account, amount);\r\n' +
          '\r\n' +
          '        _totalSupply += amount;\r\n' +
          '        _balances[account] += amount;\r\n' +
          '        emit Transfer(address(0), account, amount);\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    /**\r\n' +
          '     * @dev Destroys `amount` tokens from `account`, reducing the\r\n' +
          '     * total supply.\r\n' +
          '     *\r\n' +
          '     * Emits a {Transfer} event with `to` set to the zero address.\r\n' +
          '     *\r\n' +
          '     * Requirements:\r\n' +
          '     *\r\n' +
          '     * - `account` cannot be the zero address.\r\n' +
          '     * - `account` must have at least `amount` tokens.\r\n' +
          '     */\r\n' +
          '    function _burn(address account, uint256 amount) internal virtual {\r\n' +
          '        require(account != address(0), "ERC20: burn from the zero address");\r\n' +
          '\r\n' +
          '        _beforeTokenTransfer(account, address(0), amount);\r\n' +
          '\r\n' +
          '        uint256 accountBalance = _balances[account];\r\n' +
          '        require(accountBalance >= amount, "ERC20: burn amount exceeds balance");\r\n' +
          '        unchecked {\r\n' +
          '    _balances[account] = accountBalance - amount;\r\n' +
          '    }\r\n' +
          '        _totalSupply -= amount;\r\n' +
          '\r\n' +
          '        emit Transfer(account, address(0), amount);\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    /**\r\n' +
          '     * @dev Sets `amount` as the allowance of `spender` over the `owner` s tokens.\r\n' +
          '     *\r\n' +
          '     * This internal function is equivalent to `approve`, and can be used to\r\n' +
          '     * e.g. set automatic allowances for certain subsystems, etc.\r\n' +
          '     *\r\n' +
          '     * Emits an {Approval} event.\r\n' +
          '     *\r\n' +
          '     * Requirements:\r\n' +
          '     *\r\n' +
          '     * - `owner` cannot be the zero address.\r\n' +
          '     * - `spender` cannot be the zero address.\r\n' +
          '     */\r\n' +
          '    function _approve(address owner, address spender, uint256 amount) internal virtual {\r\n' +
          '        require(owner != address(0), "ERC20: approve from the zero address");\r\n' +
          '        require(spender != address(0), "ERC20: approve to the zero address");\r\n' +
          '\r\n' +
          '        _allowances[owner][spender] = amount;\r\n' +
          '        emit Approval(owner, spender, amount);\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    /**\r\n' +
          '     * @dev Hook that is called before any transfer of tokens. This includes\r\n' +
          '     * minting and burning.\r\n' +
          '     *\r\n' +
          '     * Calling conditions:\r\n' +
          '     *\r\n' +
          "     * - when `from` and `to` are both non-zero, `amount` of ``from``'s tokens\r\n" +
          '     * will be to transferred to `to`.\r\n' +
          '     * - when `from` is zero, `amount` tokens will be minted for `to`.\r\n' +
          "     * - when `to` is zero, `amount` of ``from``'s tokens will be burned.\r\n" +
          '     * - `from` and `to` are never both zero.\r\n' +
          '     *\r\n' +
          '     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].\r\n' +
          '     */\r\n' +
          '    function _beforeTokenTransfer(address from, address to, uint256 amount) internal virtual { }\r\n' +
          '}\r\n' +
          '\r\n' +
          '\r\n' +
          '/**\r\n' +
          ' * @dev Collection of functions related to the address type\r\n' +
          ' */\r\n' +
          'library Address {\r\n' +
          '    /**\r\n' +
          '     * @dev Returns true if `account` is a contract.\r\n' +
          '     *\r\n' +
          '     * [IMPORTANT]\r\n' +
          '     * ====\r\n' +
          '     * It is unsafe to assume that an address for which this function returns\r\n' +
          '     * false is an externally-owned account (EOA) and not a contract.\r\n' +
          '     *\r\n' +
          '     * Among others, `isContract` will return false for the following\r\n' +
          '     * types of addresses:\r\n' +
          '     *\r\n' +
          '     *  - an externally-owned account\r\n' +
          '     *  - a contract in construction\r\n' +
          '     *  - an address where a contract will be created\r\n' +
          '     *  - an address where a contract lived, but was destroyed\r\n' +
          '     * ====\r\n' +
          '     */\r\n' +
          '    function isContract(address account) internal view returns (bool) {\r\n' +
          '        // This method relies on extcodesize, which returns 0 for contracts in\r\n' +
          '        // construction, since the code is only stored at the end of the\r\n' +
          '        // constructor execution.\r\n' +
          '\r\n' +
          '        uint256 size;\r\n' +
          '        // solhint-disable-next-line no-inline-assembly\r\n' +
          '        assembly { size := extcodesize(account) }\r\n' +
          '        return size > 0;\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    /**\r\n' +
          "     * @dev Replacement for Solidity's `transfer`: sends `amount` wei to\r\n" +
          '     * `recipient`, forwarding all available gas and reverting on errors.\r\n' +
          '     *\r\n' +
          '     * https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost\r\n' +
          '     * of certain opcodes, possibly making contracts go over the 2300 gas limit\r\n' +
          '     * imposed by `transfer`, making them unable to receive funds via\r\n' +
          '     * `transfer`. {sendValue} removes this limitation.\r\n' +
          '     *\r\n' +
          '     * https://diligence.consensys.net/posts/2019/09/stop-using-soliditys-transfer-now/[Learn more].\r\n' +
          '     *\r\n' +
          '     * IMPORTANT: because control is transferred to `recipient`, care must be\r\n' +
          '     * taken to not create reentrancy vulnerabilities. Consider using\r\n' +
          '     * {ReentrancyGuard} or the\r\n' +
          '     * https://solidity.readthedocs.io/en/v0.5.11/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern].\r\n' +
          '     */\r\n' +
          '    function sendValue(address payable recipient, uint256 amount) internal {\r\n' +
          '        require(address(this).balance >= amount, "Address: insufficient balance");\r\n' +
          '\r\n' +
          '        // solhint-disable-next-line avoid-low-level-calls, avoid-call-value\r\n' +
          '        (bool success, ) = recipient.call{ value: amount }("");\r\n' +
          '        require(success, "Address: unable to send value, recipient may have reverted");\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    /**\r\n' +
          '     * @dev Performs a Solidity function call using a low level `call`. A\r\n' +
          '     * plain`call` is an unsafe replacement for a function call: use this\r\n' +
          '     * function instead.\r\n' +
          '     *\r\n' +
          '     * If `target` reverts with a revert reason, it is bubbled up by this\r\n' +
          '     * function (like regular Solidity function calls).\r\n' +
          '     *\r\n' +
          '     * Returns the raw returned data. To convert to the expected return value,\r\n' +
          '     * use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[`abi.decode`].\r\n' +
          '     *\r\n' +
          '     * Requirements:\r\n' +
          '     *\r\n' +
          '     * - `target` must be a contract.\r\n' +
          '     * - calling `target` with `data` must not revert.\r\n' +
          '     *\r\n' +
          '     * _Available since v3.1._\r\n' +
          '     */\r\n' +
          '    function functionCall(address target, bytes memory data) internal returns (bytes memory) {\r\n' +
          '      return functionCall(target, data, "Address: low-level call failed");\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    /**\r\n' +
          '     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`], but with\r\n' +
          '     * `errorMessage` as a fallback revert reason when `target` reverts.\r\n' +
          '     *\r\n' +
          '     * _Available since v3.1._\r\n' +
          '     */\r\n' +
          '    function functionCall(address target, bytes memory data, string memory errorMessage) internal returns (bytes memory) {\r\n' +
          '        return functionCallWithValue(target, data, 0, errorMessage);\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    /*\r\n' +
          '     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\r\n' +
          '     * but also transferring `value` wei to `target`.\r\n' +
          '     *\r\n' +
          '     * Requirements:\r\n' +
          '     *\r\n' +
          '     * - the calling contract must have an ETH balance of at least `value`.\r\n' +
          '     * - the called Solidity function must be `payable`.\r\n' +
          '     *\r\n' +
          '     * _Available since v3.1._\r\n' +
          '     */\r\n' +
          '     \r\n' +
          '    function functionCallWithValue(address target, bytes memory data, uint256 value) internal returns (bytes memory) {\r\n' +
          '        return functionCallWithValue(target, data, value, "Address: low-level call with value failed");\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    /**\r\n' +
          '     * @dev Same as {xref-Address-functionCallWithValue-address-bytes-uint256-}[`functionCallWithValue`], but\r\n' +
          '     * with `errorMessage` as a fallback revert reason when `target` reverts.\r\n' +
          '     *\r\n' +
          '     * _Available since v3.1._\r\n' +
          '     */\r\n' +
          '    function functionCallWithValue(address target, bytes memory data, uint256 value, string memory errorMessage) internal returns (bytes memory) {\r\n' +
          '        require(address(this).balance >= value, "Address: insufficient balance for call");\r\n' +
          '        require(isContract(target), "Address: call to non-contract");\r\n' +
          '\r\n' +
          '        // solhint-disable-next-line avoid-low-level-calls\r\n' +
          '        (bool success, bytes memory returndata) = target.call{ value: value }(data);\r\n' +
          '        return _verifyCallResult(success, returndata, errorMessage);\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    /**\r\n' +
          '     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\r\n' +
          '     * but performing a static call.\r\n' +
          '     *\r\n' +
          '     * _Available since v3.3._\r\n' +
          '     */\r\n' +
          '    function functionStaticCall(address target, bytes memory data) internal view returns (bytes memory) {\r\n' +
          '        return functionStaticCall(target, data, "Address: low-level static call failed");\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    /**\r\n' +
          '     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\r\n' +
          '     * but performing a static call.\r\n' +
          '     *\r\n' +
          '     * _Available since v3.3._\r\n' +
          '     */\r\n' +
          '    function functionStaticCall(address target, bytes memory data, string memory errorMessage) internal view returns (bytes memory) {\r\n' +
          '        require(isContract(target), "Address: static call to non-contract");\r\n' +
          '\r\n' +
          '        // solhint-disable-next-line avoid-low-level-calls\r\n' +
          '        (bool success, bytes memory returndata) = target.staticcall(data);\r\n' +
          '        return _verifyCallResult(success, returndata, errorMessage);\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    /**\r\n' +
          '     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\r\n' +
          '     * but performing a delegate call.\r\n' +
          '     *\r\n' +
          '     * _Available since v3.4._\r\n' +
          '     */\r\n' +
          '    function functionDelegateCall(address target, bytes memory data) internal returns (bytes memory) {\r\n' +
          '        return functionDelegateCall(target, data, "Address: low-level delegate call failed");\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    /**\r\n' +
          '     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\r\n' +
          '     * but performing a delegate call.\r\n' +
          '     *\r\n' +
          '     * _Available since v3.4._\r\n' +
          '     */\r\n' +
          '    function functionDelegateCall(address target, bytes memory data, string memory errorMessage) internal returns (bytes memory) {\r\n' +
          '        require(isContract(target), "Address: delegate call to non-contract");\r\n' +
          '\r\n' +
          '        // solhint-disable-next-line avoid-low-level-calls\r\n' +
          '        (bool success, bytes memory returndata) = target.delegatecall(data);\r\n' +
          '        return _verifyCallResult(success, returndata, errorMessage);\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    function _verifyCallResult(bool success, bytes memory returndata, string memory errorMessage) private pure returns(bytes memory) {\r\n' +
          '        if (success) {\r\n' +
          '            return returndata;\r\n' +
          '        } else {\r\n' +
          '            // Look for revert reason and bubble it up if present\r\n' +
          '            if (returndata.length > 0) {\r\n' +
          '                // The easiest way to bubble the revert reason is using memory via assembly\r\n' +
          '\r\n' +
          '                // solhint-disable-next-line no-inline-assembly\r\n' +
          '                assembly {\r\n' +
          '                    let returndata_size := mload(returndata)\r\n' +
          '                    revert(add(32, returndata), returndata_size)\r\n' +
          '                }\r\n' +
          '            } else {\r\n' +
          '                revert(errorMessage);\r\n' +
          '            }\r\n' +
          '        }\r\n' +
          '    }\r\n' +
          '}\r\n' +
          '\r\n' +
          '\r\n' +
          'interface IGrowthVault {\r\n' +
          '    function strategy() external view returns (address);\r\n' +
          '    function deposit(uint256 _amount) external;\r\n' +
          '    function earn() external;\r\n' +
          '    function getCurrentStrategy() external view returns (\r\n' +
          '        address _liquidityRouter,\r\n' +
          '        address _lpToken,\r\n' +
          '        address _token1,\r\n' +
          '        address _token0,\r\n' +
          '        address _farm,\r\n' +
          '        uint256 _pid\r\n' +
          '    );\r\n' +
          '}\r\n' +
          '\r\n' +
          '\r\n' +
          'interface Ifarm {\r\n' +
          '    function DINO() external view returns (address);\r\n' +
          '    function deposit(uint256 _pid, uint256 _amount) external;\r\n' +
          '    function withdraw(uint256 _pid, uint256 _amount) external;\r\n' +
          '    function userInfo(uint256 _pid, address _user) external view returns (uint256, uint256);\r\n' +
          '    function pendingSushi(uint256 _pid, address _user) external view returns (uint256);\r\n' +
          '    function leaveStaking(uint256 _amount) external;\r\n' +
          '    function emergencyWithdraw(uint256 _pid) external;\r\n' +
          '    function poolInfo(uint256) external view returns(address lpToken, uint allocPoint, uint lastRewardBlock, uint accSpiritPerShare, uint16 depositFeeBP);\r\n' +
          '}\r\n' +
          '\r\n' +
          'interface IfarmWOpid {\r\n' +
          '    struct Profit {\r\n' +
          '        uint usd;\r\n' +
          '        uint hunny;\r\n' +
          '        uint bnb;\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    struct APY {\r\n' +
          '        uint usd;\r\n' +
          '        uint hunny;\r\n' +
          '        uint bnb;\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    struct UserInfo {\r\n' +
          '        uint balance;\r\n' +
          '        uint principal;\r\n' +
          '        uint available;\r\n' +
          '        Profit profit;\r\n' +
          '        uint poolTVL;\r\n' +
          '        APY poolAPY;\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    function deposit(uint256 _amount) external;\r\n' +
          '    function withdraw(uint256 _amount) external;\r\n' +
          '    function userInfo(uint256 _pid, address _user) external view returns (uint256, uint256);\r\n' +
          '    function pendingSushi(address _user) external view returns (uint256);\r\n' +
          '    function emergencyWithdraw(uint256 _pid) external;\r\n' +
          '    function info(address account) external view returns (UserInfo memory);\r\n' +
          '}\r\n' +
          '\r\n' +
          '\r\n' +
          'interface IRouter {\r\n' +
          '    function factory() external view returns (address);\r\n' +
          '    function WETH() external view returns (address);\r\n' +
          '\r\n' +
          '    function addLiquidity(\r\n' +
          '        address tokenA,\r\n' +
          '        address tokenB,\r\n' +
          '        uint amountADesired,\r\n' +
          '        uint amountBDesired,\r\n' +
          '        uint amountAMin,\r\n' +
          '        uint amountBMin,\r\n' +
          '        address to,\r\n' +
          '        uint deadline\r\n' +
          '    ) external returns (uint amountA, uint amountB, uint liquidity);\r\n' +
          '    function addLiquidityETH(\r\n' +
          '        address token,\r\n' +
          '        uint amountTokenDesired,\r\n' +
          '        uint amountTokenMin,\r\n' +
          '        uint amountETHMin,\r\n' +
          '        address to,\r\n' +
          '        uint deadline\r\n' +
          '    ) external payable returns (uint amountToken, uint amountETH, uint liquidity);\r\n' +
          '    function removeLiquidity(\r\n' +
          '        address tokenA,\r\n' +
          '        address tokenB,\r\n' +
          '        uint liquidity,\r\n' +
          '        uint amountAMin,\r\n' +
          '        uint amountBMin,\r\n' +
          '        address to,\r\n' +
          '        uint deadline\r\n' +
          '    ) external returns (uint amountA, uint amountB);\r\n' +
          '    function removeLiquidityETH(\r\n' +
          '        address token,\r\n' +
          '        uint liquidity,\r\n' +
          '        uint amountTokenMin,\r\n' +
          '        uint amountETHMin,\r\n' +
          '        address to,\r\n' +
          '        uint deadline\r\n' +
          '    ) external returns (uint amountToken, uint amountETH);\r\n' +
          '    function removeLiquidityWithPermit(\r\n' +
          '        address tokenA,\r\n' +
          '        address tokenB,\r\n' +
          '        uint liquidity,\r\n' +
          '        uint amountAMin,\r\n' +
          '        uint amountBMin,\r\n' +
          '        address to,\r\n' +
          '        uint deadline,\r\n' +
          '        bool approveMax, uint8 v, bytes32 r, bytes32 s\r\n' +
          '    ) external returns (uint amountA, uint amountB);\r\n' +
          '    function removeLiquidityETHWithPermit(\r\n' +
          '        address token,\r\n' +
          '        uint liquidity,\r\n' +
          '        uint amountTokenMin,\r\n' +
          '        uint amountETHMin,\r\n' +
          '        address to,\r\n' +
          '        uint deadline,\r\n' +
          '        bool approveMax, uint8 v, bytes32 r, bytes32 s\r\n' +
          '    ) external returns (uint amountToken, uint amountETH);\r\n' +
          '    function swapExactTokensForTokens(\r\n' +
          '        uint amountIn,\r\n' +
          '        uint amountOutMin,\r\n' +
          '        address[] calldata path,\r\n' +
          '        address to,\r\n' +
          '        uint deadline\r\n' +
          '    ) external returns (uint[] memory amounts);\r\n' +
          '    function swapTokensForExactTokens(\r\n' +
          '        uint amountOut,\r\n' +
          '        uint amountInMax,\r\n' +
          '        address[] calldata path,\r\n' +
          '        address to,\r\n' +
          '        uint deadline\r\n' +
          '    ) external returns (uint[] memory amounts);\r\n' +
          '    function swapExactETHForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline)\r\n' +
          '        external\r\n' +
          '        payable\r\n' +
          '        returns (uint[] memory amounts);\r\n' +
          '    function swapTokensForExactETH(uint amountOut, uint amountInMax, address[] calldata path, address to, uint deadline)\r\n' +
          '        external\r\n' +
          '        returns (uint[] memory amounts);\r\n' +
          '    function swapExactTokensForETH(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline)\r\n' +
          '        external\r\n' +
          '        returns (uint[] memory amounts);\r\n' +
          '    function swapETHForExactTokens(uint amountOut, address[] calldata path, address to, uint deadline)\r\n' +
          '        external\r\n' +
          '        payable\r\n' +
          '        returns (uint[] memory amounts);\r\n' +
          '\r\n' +
          '    function quote(uint amountA, uint reserveA, uint reserveB) external pure returns (uint amountB);\r\n' +
          '    function getAmountOut(uint amountIn, uint reserveIn, uint reserveOut) external pure returns (uint amountOut);\r\n' +
          '    function getAmountIn(uint amountOut, uint reserveIn, uint reserveOut) external pure returns (uint amountIn);\r\n' +
          '    function getAmountsOut(uint amountIn, address[] calldata path) external view returns (uint[] memory amounts);\r\n' +
          '    function getAmountsIn(uint amountOut, address[] calldata path) external view returns (uint[] memory amounts);\r\n' +
          '}\r\n' +
          '\r\n' +
          '\r\n' +
          'interface IPair {\r\n' +
          '    function token0() external view returns (address);\r\n' +
          '    function token1() external view returns (address);\r\n' +
          '    function getReserves() external view returns (uint112, uint112, uint32);\r\n' +
          '    function totalSupply() external view returns (uint256);\r\n' +
          '    function mint(address to) external returns (uint256);\r\n' +
          '}\r\n' +
          '\r\n' +
          '\r\n' +
          '/**\r\n' +
          " * @dev Wrappers over Solidity's arithmetic operations with added overflow\r\n" +
          ' * checks.\r\n' +
          ' *\r\n' +
          ' * Arithmetic operations in Solidity wrap on overflow. This can easily result\r\n' +
          ' * in bugs, because programmers usually assume that an overflow raises an\r\n' +
          ' * error, which is the standard behavior in high level programming languages.\r\n' +
          ' * `SafeMath` restores this intuition by reverting the transaction when an\r\n' +
          ' * operation overflows.\r\n' +
          ' *\r\n' +
          ' * Using this library instead of the unchecked operations eliminates an entire\r\n' +
          " * class of bugs, so it's recommended to use it always.\r\n" +
          ' */\r\n' +
          'library SafeMath {\r\n' +
          '    /**\r\n' +
          '     * @dev Returns the addition of two unsigned integers, reverting on\r\n' +
          '     * overflow.\r\n' +
          '     *\r\n' +
          "     * Counterpart to Solidity's `+` operator.\r\n" +
          '     *\r\n' +
          '     * Requirements:\r\n' +
          '     *\r\n' +
          '     * - Addition cannot overflow.\r\n' +
          '     */\r\n' +
          '    function add(uint256 a, uint256 b) internal pure returns (uint256) {\r\n' +
          '        uint256 c = a + b;\r\n' +
          '        require(c >= a, "SafeMath: addition overflow");\r\n' +
          '\r\n' +
          '        return c;\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    /**\r\n' +
          '     * @dev Returns the subtraction of two unsigned integers, reverting on\r\n' +
          '     * overflow (when the result is negative).\r\n' +
          '     *\r\n' +
          "     * Counterpart to Solidity's `-` operator.\r\n" +
          '     *\r\n' +
          '     * Requirements:\r\n' +
          '     *\r\n' +
          '     * - Subtraction cannot overflow.\r\n' +
          '     */\r\n' +
          '    function sub(uint256 a, uint256 b) internal pure returns (uint256) {\r\n' +
          '        return sub(a, b, "SafeMath: subtraction overflow");\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    /**\r\n' +
          '     * @dev Returns the subtraction of two unsigned integers, reverting with custom message on\r\n' +
          '     * overflow (when the result is negative).\r\n' +
          '     *\r\n' +
          "     * Counterpart to Solidity's `-` operator.\r\n" +
          '     *\r\n' +
          '     * Requirements:\r\n' +
          '     *\r\n' +
          '     * - Subtraction cannot overflow.\r\n' +
          '     */\r\n' +
          '    function sub(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {\r\n' +
          '        require(b <= a, errorMessage);\r\n' +
          '        uint256 c = a - b;\r\n' +
          '\r\n' +
          '        return c;\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    /**\r\n' +
          '     * @dev Returns the multiplication of two unsigned integers, reverting on\r\n' +
          '     * overflow.\r\n' +
          '     *\r\n' +
          "     * Counterpart to Solidity's `*` operator.\r\n" +
          '     *\r\n' +
          '     * Requirements:\r\n' +
          '     *\r\n' +
          '     * - Multiplication cannot overflow.\r\n' +
          '     */\r\n' +
          '    function mul(uint256 a, uint256 b) internal pure returns (uint256) {\r\n' +
          "        // Gas optimization: this is cheaper than requiring 'a' not being zero, but the\r\n" +
          "        // benefit is lost if 'b' is also tested.\r\n" +
          '        // See: https://github.com/OpenZeppelin/openzeppelin-contracts/pull/522\r\n' +
          '        if (a == 0) {\r\n' +
          '            return 0;\r\n' +
          '        }\r\n' +
          '\r\n' +
          '        uint256 c = a * b;\r\n' +
          '        require(c / a == b, "SafeMath: multiplication overflow");\r\n' +
          '\r\n' +
          '        return c;\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    /**\r\n' +
          '     * @dev Returns the integer division of two unsigned integers. Reverts on\r\n' +
          '     * division by zero. The result is rounded towards zero.\r\n' +
          '     *\r\n' +
          "     * Counterpart to Solidity's `/` operator. Note: this function uses a\r\n" +
          '     * `revert` opcode (which leaves remaining gas untouched) while Solidity\r\n' +
          '     * uses an invalid opcode to revert (consuming all remaining gas).\r\n' +
          '     *\r\n' +
          '     * Requirements:\r\n' +
          '     *\r\n' +
          '     * - The divisor cannot be zero.\r\n' +
          '     */\r\n' +
          '    function div(uint256 a, uint256 b) internal pure returns (uint256) {\r\n' +
          '        return div(a, b, "SafeMath: division by zero");\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    /**\r\n' +
          '     * @dev Returns the integer division of two unsigned integers. Reverts with custom message on\r\n' +
          '     * division by zero. The result is rounded towards zero.\r\n' +
          '     *\r\n' +
          "     * Counterpart to Solidity's `/` operator. Note: this function uses a\r\n" +
          '     * `revert` opcode (which leaves remaining gas untouched) while Solidity\r\n' +
          '     * uses an invalid opcode to revert (consuming all remaining gas).\r\n' +
          '     *\r\n' +
          '     * Requirements:\r\n' +
          '     *\r\n' +
          '     * - The divisor cannot be zero.\r\n' +
          '     */\r\n' +
          '    function div(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {\r\n' +
          '        require(b > 0, errorMessage);\r\n' +
          '        uint256 c = a / b;\r\n' +
          "        // assert(a == b * c + a % b); // There is no case in which this doesn't hold\r\n" +
          '\r\n' +
          '        return c;\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    /**\r\n' +
          '     * @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),\r\n' +
          '     * Reverts when dividing by zero.\r\n' +
          '     *\r\n' +
          "     * Counterpart to Solidity's `%` operator. This function uses a `revert`\r\n" +
          '     * opcode (which leaves remaining gas untouched) while Solidity uses an\r\n' +
          '     * invalid opcode to revert (consuming all remaining gas).\r\n' +
          '     *\r\n' +
          '     * Requirements:\r\n' +
          '     *\r\n' +
          '     * - The divisor cannot be zero.\r\n' +
          '     */\r\n' +
          '    function mod(uint256 a, uint256 b) internal pure returns (uint256) {\r\n' +
          '        return mod(a, b, "SafeMath: modulo by zero");\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    /**\r\n' +
          '     * @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),\r\n' +
          '     * Reverts with custom message when dividing by zero.\r\n' +
          '     *\r\n' +
          "     * Counterpart to Solidity's `%` operator. This function uses a `revert`\r\n" +
          '     * opcode (which leaves remaining gas untouched) while Solidity uses an\r\n' +
          '     * invalid opcode to revert (consuming all remaining gas).\r\n' +
          '     *\r\n' +
          '     * Requirements:\r\n' +
          '     *\r\n' +
          '     * - The divisor cannot be zero.\r\n' +
          '     */\r\n' +
          '    function mod(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {\r\n' +
          '        require(b != 0, errorMessage);\r\n' +
          '        return a % b;\r\n' +
          '    }\r\n' +
          '}\r\n' +
          '\r\n' +
          '\r\n' +
          '/**\r\n' +
          ' * @title SafeERC20\r\n' +
          ' * @dev Wrappers around ERC20 operations that throw on failure (when the token\r\n' +
          ' * contract returns false). Tokens that return no value (and instead revert or\r\n' +
          ' * throw on failure) are also supported, non-reverting calls are assumed to be\r\n' +
          ' * successful.\r\n' +
          ' * To use this library you can add a `using SafeERC20 for IERC20;` statement to your contract,\r\n' +
          ' * which allows you to call the safe operations as `token.safeTransfer(...)`, etc.\r\n' +
          ' */\r\n' +
          'library SafeERC20 {\r\n' +
          '    using SafeMath for uint256;\r\n' +
          '    using Address for address;\r\n' +
          '\r\n' +
          '    function safeTransfer(IERC20 token, address to, uint256 value) internal {\r\n' +
          '        _callOptionalReturn(token, abi.encodeWithSelector(token.transfer.selector, to, value));\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    function safeTransferFrom(IERC20 token, address from, address to, uint256 value) internal {\r\n' +
          '        _callOptionalReturn(token, abi.encodeWithSelector(token.transferFrom.selector, from, to, value));\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    /**\r\n' +
          '     * @dev Deprecated. This function has issues similar to the ones found in\r\n' +
          '     * {IERC20-approve}, and its usage is discouraged.\r\n' +
          '     *\r\n' +
          '     * Whenever possible, use {safeIncreaseAllowance} and\r\n' +
          '     * {safeDecreaseAllowance} instead.\r\n' +
          '     */\r\n' +
          '    function safeApprove(IERC20 token, address spender, uint256 value) internal {\r\n' +
          '        // safeApprove should only be called when setting an initial allowance,\r\n' +
          '        // or when resetting it to zero. To increase and decrease it, use\r\n' +
          "        // 'safeIncreaseAllowance' and 'safeDecreaseAllowance'\r\n" +
          '        // solhint-disable-next-line max-line-length\r\n' +
          '        require((value == 0) || (token.allowance(address(this), spender) == 0),\r\n' +
          '            "SafeERC20: approve from non-zero to non-zero allowance"\r\n' +
          '        );\r\n' +
          '        _callOptionalReturn(token, abi.encodeWithSelector(token.approve.selector, spender, value));\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    function safeIncreaseAllowance(IERC20 token, address spender, uint256 value) internal {\r\n' +
          '        uint256 newAllowance = token.allowance(address(this), spender).add(value);\r\n' +
          '        _callOptionalReturn(token, abi.encodeWithSelector(token.approve.selector, spender, newAllowance));\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    function safeDecreaseAllowance(IERC20 token, address spender, uint256 value) internal {\r\n' +
          '        uint256 newAllowance = token.allowance(address(this), spender).sub(value, "SafeERC20: decreased allowance below zero");\r\n' +
          '        _callOptionalReturn(token, abi.encodeWithSelector(token.approve.selector, spender, newAllowance));\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    /**\r\n' +
          '     * @dev Imitates a Solidity high-level call (i.e. a regular function call to a contract), relaxing the requirement\r\n' +
          '     * on the return value: the return value is optional (but if data is returned, it must not be false).\r\n' +
          '     * @param token The token targeted by the call.\r\n' +
          '     * @param data The call data (encoded using abi.encode or one of its variants).\r\n' +
          '     */\r\n' +
          '    function _callOptionalReturn(IERC20 token, bytes memory data) private {\r\n' +
          "        // We need to perform a low level call here, to bypass Solidity's return data size checking mechanism, since\r\n" +
          "        // we're implementing it ourselves. We use {Address.functionCall} to perform this call, which verifies that\r\n" +
          '        // the target address contains contract code and also asserts for success in the low-level call.\r\n' +
          '\r\n' +
          '        bytes memory returndata = address(token).functionCall(data, "SafeERC20: low-level call failed");\r\n' +
          '        if (returndata.length > 0) { // Return data is optional\r\n' +
          '            // solhint-disable-next-line max-line-length\r\n' +
          '            require(abi.decode(returndata, (bool)), "SafeERC20: ERC20 operation did not succeed");\r\n' +
          '        }\r\n' +
          '    }\r\n' +
          '}\r\n' +
          '\r\n' +
          'library TransferHelper {\r\n' +
          '    function safeTransferBNB(address to, uint256 value) internal {\r\n' +
          '        (bool success, ) = to.call{value: value}(new bytes(0));\r\n' +
          "        require(success, 'TransferHelper::safeTransferBNB: BNB transfer failed');\r\n" +
          '    }\r\n' +
          '}\r\n' +
          '\r\n' +
          'interface IWBNB {\r\n' +
          '    function deposit() external payable;\r\n' +
          '    function transfer(address to, uint value) external returns (bool);\r\n' +
          '    function transferFrom(address from, address to, uint value) external returns (bool);\r\n' +
          '    function withdraw(uint) external;\r\n' +
          '}\r\n' +
          '\r\n' +
          '\r\n' +
          '/**\r\n' +
          ' * @dev Implementation of a vault to deposit funds for yield optimizing.\r\n' +
          ' * This is the contract that receives funds and that users interface with.\r\n' +
          " * The yield optimizing strategy itself is implemented in a separate 'Strategy.sol' contract.\r\n" +
          ' */\r\n' +
          'contract GrowthVault is ERC20, Ownable {\r\n' +
          '    using SafeERC20 for IERC20;\r\n' +
          '    using Address for address;                \r\n' +
          '    \r\n' +
          '    struct StrategyInfo {\r\n' +
          '        address liquidityRouter;\r\n' +
          '        address lpToken;\r\n' +
          '        uint256 pid;\r\n' +
          '        uint256 totalLP;\r\n' +
          '        uint256 totalCapital;\r\n' +
          '        address farm;\r\n' +
          '        address token0;\r\n' +
          '        address token1;\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    // Info of each strategy for LP tokens.\r\n' +
          '    // nameID, strategy obj\r\n' +
          '    mapping(uint256 => StrategyInfo) private strategyInfo;\r\n' +
          '    mapping(address => uint256) private requestBlock;\r\n' +
          '    mapping(uint256 => bool) private nameExist;\r\n' +
          '    uint256[] private names;\r\n' +
          '\r\n' +
          '    uint256 public constant withdrawFee = 15; // 15%\r\n' +
          '    uint256 public constant toleranceLevelPercent = 1; // 1% \r\n' +
          '    uint256 public totalFeeUSDT;\r\n' +
          '    uint256 public REQUIRED_NUMBER_OF_BLOCKS = 4;\r\n' +
          '    address public government;\r\n' +
          '    address public YELtoken;\r\n' +
          '    address public yelLiquidityRouter;\r\n' +
          '    address public USDT;\r\n' +
          '\r\n' +
          '    uint256 private pid;\r\n' +
          '    uint256 private nameID;\r\n' +
          '    uint256 private constant NONE_PID_VALUE = 999999;\r\n' +
          '    uint256 private constant differencePercent = 1; // 1%\r\n' +
          '    address private farm;\r\n' +
          '    address private token0;\r\n' +
          '    address private token1;\r\n' +
          '    address private WETH;\r\n' +
          '    address private liquidityRouter;\r\n' +
          '    uint256 public pendingFee; // in native tokens\r\n' +
          '    uint256 public pendingFeeInCakes;\r\n' +
          '    address private lpToken;\r\n' +
          '\r\n' +
          '    // TODO: remove strategy\r\n' +
          '    // TODO: userСapital добавить при каждом вводе кошелька пользователя и вывести в WBNB\r\n' +
          '\r\n' +
          '    event YELswapped(uint256 percent);\r\n' +
          '    event DepositToVault(uint256 amount);\r\n' +
          '    event WithdrawFromVault(uint256 amount);\r\n' +
          '    event Earn(uint256 amount);\r\n' +
          '    event PartialMigrate(uint256 amount);\r\n' +
          '    event Migrate(uint256 amount);\r\n' +
          '    event AutoCompound();\r\n' +
          '\r\n' +
          '    modifier onlyOwnerOrGovernment() {\r\n' +
          '        require(\r\n' +
          '            owner() == _msgSender() || government == _msgSender(),\r\n' +
          '            "Ownable: caller is not the owner or government"\r\n' +
          '        );\r\n' +
          '        _;\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    modifier canWithdraw() {\r\n' +
          '        uint256 currentBlock = block.number;\r\n' +
          '        if(requestBlock[msg.sender] == 0) {\r\n' +
          '            requestBlock[msg.sender] = currentBlock;\r\n' +
          '        } else if(currentBlock - requestBlock[msg.sender] >= REQUIRED_NUMBER_OF_BLOCKS) {\r\n' +
          '            _;\r\n' +
          '        } else {\r\n' +
          '            revert("Difference of blocks is less then REQUIRED_NUMBER_OF_BLOCKS");\r\n' +
          '        }\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    /**\r\n' +
          '     * @dev Sets the value of {token} to the token that the vault will\r\n' +
          "     * hold as underlying value. It initializes the vault's own token.\r\n" +
          '     * This token is minted when someone does a deposit. It is burned in order\r\n' +
          '     * to withdraw the corresponding portion of the underlying assets.\r\n' +
          '     */\r\n' +
          '    constructor(\r\n' +
          '        string memory name__,\r\n' +
          '        string memory symbol__,\r\n' +
          '        address _lpToken,\r\n' +
          '        uint256 _pid,\r\n' +
          '        uint256 _nameID,\r\n' +
          '        address _farm,\r\n' +
          '        address _liquidityRouter,\r\n' +
          '        address _USDT,\r\n' +
          '        address _YELtoken,\r\n' +
          '        address _yelLiquidityRouter) ERC20(name__, symbol__) {\r\n' +
          '        require(_lpToken != address(0), "The address of lp token can not be a zero address");\r\n' +
          '        require(_farm != address(0), "The address of farm can not be a zero address");\r\n' +
          '        require(_liquidityRouter != address(0), "The address of liquidityRouter can not be a zero address");\r\n' +
          '        require(_YELtoken != address(0), "The address of YELtoken can not be a zero address");\r\n' +
          '        \r\n' +
          '        _setBaseAddresses(_farm, _liquidityRouter, _lpToken, _pid, _nameID);\r\n' +
          '\r\n' +
          '        yelLiquidityRouter = _yelLiquidityRouter;\r\n' +
          '        YELtoken = _YELtoken;\r\n' +
          '        WETH = IRouter(_liquidityRouter).WETH();\r\n' +
          '        USDT = _USDT;\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    function getCurrentStrategy() public view returns (\r\n' +
          '        address _liquidityRouter,\r\n' +
          '        address _lpToken,\r\n' +
          '        address _token1,\r\n' +
          '        address _token0,\r\n' +
          '        address _farm,\r\n' +
          '        uint256 _pid) {\r\n' +
          '        _liquidityRouter = liquidityRouter;\r\n' +
          '        _lpToken = lpToken;\r\n' +
          '        _token1 = token1;\r\n' +
          '        _token0 = token0;\r\n' +
          '        _farm = farm;\r\n' +
          '        _pid = pid;\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    function getNamesOfStrategies() public view returns (uint256[] memory) {\r\n' +
          '        return names;\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    function getStrategyInfo(uint256 _nameID) public view returns (\r\n' +
          '        address _liquidityRouter,\r\n' +
          '        address _lpToken,\r\n' +
          '        address _token1,\r\n' +
          '        address _token0,\r\n' +
          '        address _farm,\r\n' +
          '        uint256 _pid) {\r\n' +
          '\r\n' +
          '        StrategyInfo memory strategyObj = strategyInfo[_nameID];\r\n' +
          '        _liquidityRouter = strategyObj.liquidityRouter;\r\n' +
          '        _lpToken = strategyObj.lpToken;\r\n' +
          '        _token1 = strategyObj.token1;\r\n' +
          '        _token0 = strategyObj.token0;\r\n' +
          '        _farm = strategyObj.farm;\r\n' +
          '        _pid = strategyObj.pid;\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    function updateTotalCapital() public returns (uint256) {\r\n' +
          '        uint256 totalCapital = 0;\r\n' +
          '        uint256 _nameID;\r\n' +
          '        StrategyInfo storage strategyObj;\r\n' +
          '        uint256 totalLP;\r\n' +
          '        uint256 _token0Value;\r\n' +
          '        uint256 _token1Value;\r\n' +
          '        uint256[] memory amounts;\r\n' +
          '        address[] memory path = new address[](2);\r\n' +
          '\r\n' +
          '        for (uint256 i; i < names.length; i++) {\r\n' +
          '            _nameID = names[i];\r\n' +
          '            strategyObj = strategyInfo[_nameID];\r\n' +
          '            if(strategyObj.pid < NONE_PID_VALUE) {\r\n' +
          '                totalLP = _getAmountLPFromStrategy(strategyObj.farm, strategyObj.pid);\r\n' +
          '            } else {\r\n' +
          '                totalLP = _getAmountLPFromStrategyWOpid(strategyObj.farm);\r\n' +
          '            }\r\n' +
          '            \r\n' +
          '            if(totalLP > 0) {\r\n' +
          '                (_token0Value, _token1Value) = _getTokenValues(strategyObj.lpToken, totalLP);\r\n' +
          '\r\n' +
          '                // calculates how many nativeToken for tokens\r\n' +
          '                path[1] = WETH;\r\n' +
          '                if(strategyObj.token0 == WETH) {\r\n' +
          '                    path[0] = strategyObj.token1;\r\n' +
          '                    amounts = IRouter(strategyObj.liquidityRouter).getAmountsOut(_token1Value, path);\r\n' +
          '                    strategyObj.totalCapital = amounts[1];\r\n' +
          '                    totalCapital += strategyObj.totalCapital;\r\n' +
          '                } else if (strategyObj.token1 == WETH) {\r\n' +
          '                    path[0] = strategyObj.token0;\r\n' +
          '                    amounts = IRouter(strategyObj.liquidityRouter).getAmountsOut(_token0Value, path);\r\n' +
          '                    strategyObj.totalCapital = amounts[1];\r\n' +
          '                    totalCapital += strategyObj.totalCapital;\r\n' +
          '                } else {\r\n' +
          '                    path[0] = strategyObj.token0;\r\n' +
          '                    amounts = IRouter(strategyObj.liquidityRouter).getAmountsOut(_token0Value, path);\r\n' +
          '                    strategyObj.totalCapital = amounts[1];\r\n' +
          '                    totalCapital += strategyObj.totalCapital;\r\n' +
          '\r\n' +
          '                    path[0] = strategyObj.token1;\r\n' +
          '                    amounts = IRouter(strategyObj.liquidityRouter).getAmountsOut(_token1Value, path);\r\n' +
          '                    strategyObj.totalCapital = amounts[1];\r\n' +
          '                    totalCapital += strategyObj.totalCapital;\r\n' +
          '                }\r\n' +
          '            }\r\n' +
          '        }\r\n' +
          '        return totalCapital;\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    function addStrategy(\r\n' +
          '        address _newStrategy,\r\n' +
          '        uint256 _pid,\r\n' +
          '        address _lpToken,\r\n' +
          '        address _liquidityRouter,\r\n' +
          '        uint256 _nameID) onlyOwner external {\r\n' +
          '        require(_newStrategy != address(0), "newStrategy can not be a zero address");\r\n' +
          '        require(_lpToken != address(0), "lpToken can not be a zero address");\r\n' +
          '        require(_liquidityRouter != address(0), "liquidityRouter can not be a zero address");\r\n' +
          '\r\n' +
          '        _addStrategy(_newStrategy, _pid, _lpToken, _liquidityRouter, _nameID);\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    function addStrategyWOpid(\r\n' +
          '        address _newStrategy,\r\n' +
          '        address _lpToken,\r\n' +
          '        address _liquidityRouter,\r\n' +
          '        uint256 _nameID) onlyOwner external {\r\n' +
          '        require(_newStrategy != address(0), "newStrategy can not be a zero address");\r\n' +
          '        require(_lpToken != address(0), "lpToken can not be a zero address");\r\n' +
          '        require(_liquidityRouter != address(0), "liquidityRouter can not be a zero address");\r\n' +
          '\r\n' +
          '        _addStrategy(_newStrategy, NONE_PID_VALUE, _lpToken, _liquidityRouter, _nameID);\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    function setGovernment(address _government) external onlyOwner {\r\n' +
          '        require(_government != address(0), "The address of government can not be a zero address");\r\n' +
          '        government = _government;\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    function withdrawTokensFee() onlyOwner public {\r\n' +
          '        require(\r\n' +
          '            _getBalanceOfToken(USDT) > 0,\r\n' +
          '            "GrowthVault: USDT balance should be more then 0"\r\n' +
          '        );\r\n' +
          '        IERC20(USDT).transfer(msg.sender, totalFeeUSDT);\r\n' +
          '        totalFeeUSDT = 0;\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    function earn() public {\r\n' +
          '        _earn(farm, pid, _getBalanceOfToken(lpToken));\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    function autoCompound() public {\r\n' +
          '        uint256 _nameID;\r\n' +
          '        uint256 _amount;\r\n' +
          '        address _cakeToken;\r\n' +
          '        address[] memory path = new address[](2);\r\n' +
          '        address[] memory path1 = new address[](3);\r\n' +
          '        StrategyInfo memory strategyObj;\r\n' +
          '        uint256[] memory amounts;\r\n' +
          '        uint256 rewardsFeeInWETH;\r\n' +
          '        uint256 rewardsFeeInCakes;\r\n' +
          '        uint256 rewardBalance;\r\n' +
          '        uint256 desired;\r\n' +
          '        for (uint256 i; i < names.length; i++) {\r\n' +
          '            _nameID = names[i];\r\n' +
          '            strategyObj = strategyInfo[_nameID];\r\n' +
          '\r\n' +
          '            if(strategyObj.pid < NONE_PID_VALUE) {\r\n' +
          '                _amount = _getAmountLPFromStrategy(strategyObj.farm, strategyObj.pid);\r\n' +
          '            } else {\r\n' +
          '                _amount = _getAmountLPFromStrategyWOpid(strategyObj.farm);\r\n' +
          '            }\r\n' +
          '            if (_amount > 0) {\r\n' +
          '                _withdrawFromStrategy(_nameID, _amount);\r\n' +
          '                _cakeToken = _getCakeToken(strategyObj.farm);\r\n' +
          '\r\n' +
          '                path[0] = _cakeToken;\r\n' +
          '                path[1] = WETH;\r\n' +
          '\r\n' +
          '                rewardBalance = getAvalaibleCakes(_cakeToken);\r\n' +
          '                IERC20(_cakeToken).safeApprove(strategyObj.liquidityRouter, 0);\r\n' +
          '                IERC20(_cakeToken).safeApprove(strategyObj.liquidityRouter, type(uint256).max);\r\n' +
          '\r\n' +
          '                rewardsFeeInCakes = _calculateAmountFee(rewardBalance) + pendingFeeInCakes;\r\n' +
          '                amounts = IRouter(strategyObj.liquidityRouter).getAmountsOut(rewardsFeeInCakes, path);\r\n' +
          '                if(amounts[1] > 100) {\r\n' +
          '                    IRouter(strategyObj.liquidityRouter).swapExactTokensForTokens(\r\n' +
          '                        rewardsFeeInCakes,\r\n' +
          '                        amounts[1] - (amounts[1]*toleranceLevelPercent)/100,\r\n' +
          '                        path,\r\n' +
          '                        address(this),\r\n' +
          '                        block.timestamp+1 minutes\r\n' +
          '                    );\r\n' +
          '                    pendingFeeInCakes = 0;\r\n' +
          '                } else {\r\n' +
          '                    pendingFeeInCakes += rewardsFeeInCakes;\r\n' +
          '                }\r\n' +
          '\r\n' +
          '                path[0] = WETH;\r\n' +
          '                path[1] = USDT;\r\n' +
          '                rewardsFeeInWETH = _getBalanceOfToken(WETH);\r\n' +
          '                amounts = IRouter(strategyObj.liquidityRouter).getAmountsOut(rewardsFeeInWETH, path);\r\n' +
          '                if(amounts[1] > 100) {\r\n' +
          '                    IRouter(strategyObj.liquidityRouter).swapExactTokensForTokens(\r\n' +
          '                        rewardsFeeInWETH,\r\n' +
          '                        amounts[1] - (amounts[1]*toleranceLevelPercent)/100,\r\n' +
          '                        path,\r\n' +
          '                        address(this),\r\n' +
          '                        block.timestamp+1 minutes\r\n' +
          '                    );\r\n' +
          '                    pendingFee = 0;\r\n' +
          '                    totalFeeUSDT = _getBalanceOfToken(USDT);\r\n' +
          '                } else {\r\n' +
          '                    pendingFee += rewardsFeeInWETH;\r\n' +
          '                }\r\n' +
          '                \r\n' +
          '                rewardBalance = getAvalaibleCakes(_cakeToken);\r\n' +
          '\r\n' +
          '                path1[0] = _cakeToken;\r\n' +
          '                path1[1] = WETH;\r\n' +
          '                path1[2] = _cakeToken;\r\n' +
          '\r\n' +
          '                amounts = IRouter(strategyObj.liquidityRouter).getAmountsOut(rewardBalance, path1);\r\n' +
          '                if(amounts[1] > 100) {\r\n' +
          '                    IRouter(strategyObj.liquidityRouter).swapExactTokensForTokens(\r\n' +
          '                        rewardBalance,\r\n' +
          '                        amounts[1] - (amounts[1]*toleranceLevelPercent)/100,\r\n' +
          '                        path1,\r\n' +
          '                        address(this),\r\n' +
          '                        block.timestamp+1 minutes\r\n' +
          '                    );\r\n' +
          '                    amounts = IRouter(strategyObj.liquidityRouter).getAmountsOut(\r\n' +
          '                        _getBalanceOfToken(strategyObj.token0), path);\r\n' +
          '                    \r\n' +
          '                    if(amounts[1] <= _getBalanceOfToken(strategyObj.token1)) {\r\n' +
          '                        desired = amounts[1];\r\n' +
          '                    } else {\r\n' +
          '                        desired = _getBalanceOfToken(strategyObj.token1);\r\n' +
          '                    }\r\n' +
          '                    IERC20(strategyObj.token0).transfer(lpToken, _getBalanceOfToken(strategyObj.token0));\r\n' +
          '                    IERC20(strategyObj.token1).transfer(lpToken, desired);\r\n' +
          '                    IPair(lpToken).mint(address(this));\r\n' +
          '                }\r\n' +
          '                _earn(strategyObj.farm, strategyObj.pid, _getBalanceOfToken(strategyObj.lpToken));\r\n' +
          '                \r\n' +
          '                strategyObj.totalLP = _getAmountLPFromStrategy(strategyObj.farm, strategyObj.pid);\r\n' +
          '                \r\n' +
          '                // TODO: all other tokens to USDT ?\r\n' +
          '            }\r\n' +
          '        }\r\n' +
          '        updateTotalCapital();\r\n' +
          '        emit AutoCompound();\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    receive() external payable {\r\n' +
          '        deposit();\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    function deposit() public payable {\r\n' +
          '        autoCompound();\r\n' +
          '        _approveTokens(token0, token1, liquidityRouter);\r\n' +
          '        _addLiquidity(liquidityRouter, token0, token1);\r\n' +
          '        earn();\r\n' +
          '\r\n' +
          '        // uint256 totalCapital = updateTotalCapital();\r\n' +
          '        // uint256 percent = (msg.value * 100 * 1000) / (totalCapital);\r\n' +
          '        // uint256 shares = percent * totalCapital / 1000;\r\n' +
          '        // _mint(msg.sender, shares);\r\n' +
          '\r\n' +
          '        // // TODO: excessToUSDT(); ?\r\n' +
          '        // emit DepositToVault(msg.value);\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    function withdraw(uint256 _shares) canWithdraw public {\r\n' +
          '        uint256 totalCapital = updateTotalCapital();\r\n' +
          '        // TODO: percent = (_shares/totalShares)*100\r\n' +
          '        autoCompound();\r\n' +
          '        uint256 percent = (_shares * 100 * 100)/(totalCapital * 100);\r\n' +
          '        _burn(msg.sender, _shares);\r\n' +
          '        _getYELs(percent);\r\n' +
          '        uint256 _balance = _getBalanceOfToken(YELtoken);\r\n' +
          '        IERC20(YELtoken).transfer(msg.sender, _balance);\r\n' +
          '\r\n' +
          '        emit WithdrawFromVault(_balance);\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    function migrate(address _contract) onlyOwnerOrGovernment public {\r\n' +
          '        require(_contract != address(0), "The _contract can not be a zero address");\r\n' +
          '        autoCompound();\r\n' +
          '        (address _newLpToken, address _newliquidityRouter,,,,) = IGrowthVault(_contract).getCurrentStrategy();\r\n' +
          '\r\n' +
          '        _withdrawFromStrategies();\r\n' +
          '\r\n' +
          '        for (uint256 i; i < names.length; i++) {\r\n' +
          '            _removeLiquidityAfterWithdraw(names[i]);\r\n' +
          '        }\r\n' +
          '\r\n' +
          '        (address _token0, address _token1) = _getTokensFromLP(_newLpToken);\r\n' +
          '        _addLiquidity(_token0, _token1, _newliquidityRouter);\r\n' +
          '        IERC20(_newLpToken).transfer(_contract, _getBalanceOfToken(_newLpToken));\r\n' +
          '        IGrowthVault(_contract).earn();\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    function partialMigrate(\r\n' +
          '        uint256 _oldNameId,\r\n' +
          '        uint256 _amount,\r\n' +
          '        uint256 _newNameId) onlyOwnerOrGovernment public {\r\n' +
          '        autoCompound();\r\n' +
          '        require(nameExist[_oldNameId], "The _oldNameId value does not exist");\r\n' +
          '        require(nameExist[_newNameId], "The _newNameId value does not exist");\r\n' +
          '        require(_amount > 0, "The _amount value sould be more then ZERO");\r\n' +
          '\r\n' +
          '        // take LP from old strategy\r\n' +
          '        _withdrawFromStrategy(_oldNameId, _amount);\r\n' +
          '        // swap LP and Cakes to native Token\r\n' +
          '        _removeLiquidityAfterWithdraw(_oldNameId);\r\n' +
          '\r\n' +
          '        StrategyInfo memory strategyObj = strategyInfo[_newNameId];\r\n' +
          '\r\n' +
          '        // get new LP for new strategy\r\n' +
          '        _addLiquidity(strategyObj.liquidityRouter, strategyObj.token0, strategyObj.token1);\r\n' +
          '        _earn(strategyObj.farm, strategyObj.pid, _getBalanceOfToken(strategyObj.lpToken));\r\n' +
          '        emit PartialMigrate(_amount);\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    function _getTokensFromLP(address _lpToken) internal view returns (address, address) {\r\n' +
          '        return (IPair(_lpToken).token0(), IPair(_lpToken).token1());\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    function _getBalanceOfToken(address _token) internal view returns (uint256) {\r\n' +
          '        return IERC20(_token).balanceOf(address(this));\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    function _getAmountLPFromStrategy(address _farm, uint256 _pid) public view returns (uint256 amount) {\r\n' +
          '        (amount,) = Ifarm(_farm).userInfo(_pid, address(this));\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    function _getAmountLPFromStrategyWOpid(address _farm) internal view returns (uint256 amount) {\r\n' +
          '\r\n' +
          '        IfarmWOpid.UserInfo memory info = IfarmWOpid(_farm).info(address(this));\r\n' +
          '        return info.available;\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    function _withdrawFromStrategies() internal {\r\n' +
          '        uint256 _amount;\r\n' +
          '        StrategyInfo memory strategyObj;\r\n' +
          '        for (uint256 i; i < names.length; i++) {\r\n' +
          '            strategyObj = strategyInfo[names[i]];\r\n' +
          '\r\n' +
          '            if(strategyObj.pid < NONE_PID_VALUE) {\r\n' +
          '                _amount = _getAmountLPFromStrategy(strategyObj.farm, strategyObj.pid);\r\n' +
          '            } else {\r\n' +
          '                _amount = _getAmountLPFromStrategyWOpid(strategyObj.farm);\r\n' +
          '            }\r\n' +
          '            _withdrawFromStrategy(names[i], _amount);\r\n' +
          '        }\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    function _withdrawFromStrategy(uint256 _nameID, uint256 _amount) internal {\r\n' +
          '        StrategyInfo memory strategyObj = strategyInfo[_nameID];\r\n' +
          '        if(strategyObj.pid < NONE_PID_VALUE) {\r\n' +
          '            Ifarm(strategyObj.farm).withdraw(strategyObj.pid, _amount);\r\n' +
          '        }\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    function _calculateAmountAfterFee(uint256 amount) internal pure returns(uint256) {\r\n' +
          '        /*\r\n' +
          '        As the contract takes fee percent from the amount,\r\n' +
          '        so amount needs to multiple by 100 and divide by 10000 to get correct percentage in solidity\r\n' +
          '\r\n' +
          '        example: amount = 50 LP, percent = 2%\r\n' +
          '        fee calculates: 50 * 2 * 100 / 10000 or it is the same as 50 * 0.02\r\n' +
          '        fee result: 1 LP\r\n' +
          '        amount after fee calculates: amount - fee result\r\n' +
          '        amount after fee result: 50 - 1 = 49 LP\r\n' +
          '        */\r\n' +
          '        return amount - _calculateAmountFee(amount);\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    function _calculateAmountFee(uint256 amount) internal pure returns(uint256) {\r\n' +
          '        /*\r\n' +
          '        As the contract takes fee percent from the amount,\r\n' +
          '        so amount needs to multiple by 100 and divide by 10000 to get correct percentage in solidity\r\n' +
          '\r\n' +
          '        example: amount = 50 LP, percent = 2%\r\n' +
          '        fee calculates: 50 * 2 * 100 / 10000 or it is the same as 50 * 0.02\r\n' +
          '        fee result: 1 LP\r\n' +
          '        */\r\n' +
          '        return (amount * withdrawFee) / 100;\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    function _removeLiquidity(\r\n' +
          '        uint256 _amount,\r\n' +
          '        address _liquidityRouter,\r\n' +
          '        address _token0,\r\n' +
          '        address _token1) internal {\r\n' +
          '        IRouter(_liquidityRouter).removeLiquidity(\r\n' +
          '            _token0, // tokenA\r\n' +
          '            _token1, // tokenB\r\n' +
          '            _amount, // liquidity\r\n' +
          '            0, // amountAmin\r\n' +
          '            0,\r\n' +
          '            address(this), // to \r\n' +
          '            block.timestamp + 1 minutes // deadline\r\n' +
          '        );\r\n' +
          '        _swapTokensToNativeToken(_token0, _token1, _liquidityRouter);\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    function _addLiquidity(address _liquidityRouter, address _token0, address _token1) internal {\r\n' +
          '        address[] memory path = new address[](2);\r\n' +
          '        uint256[] memory amounts;\r\n' +
          '        uint256 _balance = address(this).balance;\r\n' +
          '        // (uint256 _reserve0, uint256 _reserve1,) = IPair(_lPtoken).getReserves();\r\n' +
          '        path[0] = WETH;\r\n' +
          '        uint256 desiredAmountToken;\r\n' +
          '        uint256 desiredAmountETH = _balance / 2; // FTM, MATIC, ETH, BNB\r\n' +
          '        // usdc ans spooky\r\n' +
          '        if(_token0 != WETH) {\r\n' +
          '            path[1] = _token0;\r\n' +
          '            amounts = IRouter(_liquidityRouter).getAmountsOut(_balance, path);\r\n' +
          '            desiredAmountToken = amounts[1] / 2;\r\n' +
          '            IRouter(_liquidityRouter).swapExactETHForTokens{value:desiredAmountETH}(\r\n' +
          '                desiredAmountToken - (desiredAmountToken*toleranceLevelPercent/100), // amountOutMin\r\n' +
          '                path,\r\n' +
          '                address(this),\r\n' +
          '                block.timestamp + 1 minutes // deadline\r\n' +
          '            );\r\n' +
          '        }\r\n' +
          '\r\n' +
          '        if(_token1 != WETH) {\r\n' +
          '            path[1] = _token1;\r\n' +
          '            amounts = IRouter(_liquidityRouter).getAmountsOut(_balance, path);\r\n' +
          '            desiredAmountToken = amounts[1] / 2;\r\n' +
          '            IRouter(_liquidityRouter).swapExactETHForTokens{value:desiredAmountETH}(\r\n' +
          '                desiredAmountToken - (desiredAmountToken*toleranceLevelPercent/100), // amountOutMin\r\n' +
          '                path,\r\n' +
          '                address(this),\r\n' +
          '                block.timestamp + 1 minutes\r\n' +
          '            );\r\n' +
          '        }\r\n' +
          '        // _approveTokens(_token0, _token1, _liquidityRouter);\r\n' +
          '        if(_token1 != WETH && _token0 == WETH) {\r\n' +
          '            desiredAmountToken = _getBalanceOfToken(_token1);\r\n' +
          '            IRouter(_liquidityRouter).addLiquidityETH{value:desiredAmountETH}(\r\n' +
          '                _token1,\r\n' +
          '                desiredAmountToken,\r\n' +
          '                desiredAmountToken - (desiredAmountToken*toleranceLevelPercent/100),\r\n' +
          '                desiredAmountETH - (desiredAmountETH*toleranceLevelPercent)/100,\r\n' +
          '                address(this),\r\n' +
          '                block.timestamp + 1\r\n' +
          '            );\r\n' +
          '        } else if(_token1 == WETH && _token0 != WETH) {\r\n' +
          '            desiredAmountToken = _getBalanceOfToken(_token0);\r\n' +
          '            IRouter(_liquidityRouter).addLiquidityETH{value:desiredAmountETH}(\r\n' +
          '                _token0,\r\n' +
          '                desiredAmountToken,\r\n' +
          '                desiredAmountToken - (desiredAmountToken*toleranceLevelPercent*100/(10000)),\r\n' +
          '                desiredAmountETH - (desiredAmountETH*toleranceLevelPercent)/100,\r\n' +
          '                address(this),\r\n' +
          '                block.timestamp + 1\r\n' +
          '            );\r\n' +
          '        } else {\r\n' +
          '            path[0] = _token0;\r\n' +
          '            path[1] = _token1;\r\n' +
          '\r\n' +
          '            uint256 desired0 = _getBalanceOfToken(_token0);\r\n' +
          '            uint256 balanceToken1 = _getBalanceOfToken(_token1);\r\n' +
          '            amounts = IRouter(_liquidityRouter).getAmountsOut(desired0, path);\r\n' +
          '            uint256 desired1;\r\n' +
          '            if(amounts[1] <= balanceToken1) {\r\n' +
          '                desired1 = amounts[1];\r\n' +
          '            } else {\r\n' +
          '                desired1 = balanceToken1;\r\n' +
          '            }\r\n' +
          '            IERC20(_token0).transfer(lpToken, desired0);\r\n' +
          '            IERC20(_token1).transfer(lpToken, desired1);\r\n' +
          '            IPair(lpToken).mint(address(this));\r\n' +
          '        }\r\n' +
          '\r\n' +
          '\r\n' +
          '        // ---------------\r\n' +
          '        // uint256 ratio;\r\n' +
          '        // uint256 dec0 = IERC20(_token0).decimals(); // 6\r\n' +
          '        // uint256 dec1 = IERC20(_token1).decimals(); // 18\r\n' +
          '        // uint256 decDiff = dec0 - dec1 ? dec0 >= dec1 : dec1 - dec0;\r\n' +
          '        // decDiff = 1 ? decDiff == 0 : decDiff;\r\n' +
          '\r\n' +
          '        // if(_token0 == WETH) {\r\n' +
          '        //     ratio = _reserve0 * 10*12 / _reserve1; // div for future by\r\n' +
          '        // } else if (_token1 == WETH) { // ->>>>>\r\n' +
          '        //     // 4024674337009544375369059 * 10 ** 12 / 10994611588736\r\n' +
          '        //     /// FTM r / wUSDT r\r\n' +
          '        //     ratioFTMperUSDT = (_reserve1 / decDiff) * 10 ** 12 / _reserve0; // 0.36605880112\r\n' +
          '        //     // 366058801125\r\n' +
          '        // }\r\n' +
          '\r\n' +
          '        // amountOfUSDT = msg.value / ratioFTMperUSDT; // TODO? 10 ** 12\r\n' +
          '        // // 2 * 10 ** 18 / 0.36605880112\r\n' +
          '        // desiredAmountFTM = 2 / 2; // FTM = 2 / 2\r\n' +
          '        // desiredAmountUSDT = amountOfUSDT / 2;\r\n' +
          '        // IRouter(_liquidityRouter).addLiquidityETH{value:desiredAmountFTM}(\r\n' +
          '        //     USDT,\r\n' +
          '        //     desiredAmountUSDT,\r\n' +
          '        //     desiredAmountUSDT * (desiredAmountUSDT * toleranceLevelPercent)/100,\r\n' +
          '        //     desiredAmountFTM * (desiredAmountFTM * toleranceLevelPercent)/100,\r\n' +
          '        //     address(this),\r\n' +
          '        //     block.timestamp + 1\r\n' +
          '        // );\r\n' +
          '\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    function _addStrategy(\r\n' +
          '        address _newFarm,\r\n' +
          '        uint256 _pid,\r\n' +
          '        address _lpToken,\r\n' +
          '        address _liquidityRouter,\r\n' +
          '        uint256 _nameID) internal {\r\n' +
          '        StrategyInfo storage strategyObj = strategyInfo[_nameID];\r\n' +
          '        (address _token0, address _token1) = _getTokensFromLP(_lpToken);\r\n' +
          '        strategyObj.liquidityRouter = _liquidityRouter;\r\n' +
          '        strategyObj.lpToken = _lpToken;\r\n' +
          '        strategyObj.pid = _pid;\r\n' +
          '        strategyObj.farm = _newFarm;\r\n' +
          '        strategyObj.token0 = _token0;\r\n' +
          '        strategyObj.token1 = _token1;\r\n' +
          '\r\n' +
          '        if (!nameExist[_nameID]) {\r\n' +
          '            names.push(_nameID);\r\n' +
          '            nameExist[_nameID] = true;\r\n' +
          '        }\r\n' +
          '\r\n' +
          '        _approveTokens(_token0, _token1, _liquidityRouter);\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    function _approveTokens(address _token0, address _token1, address _liquidityRouter) public {\r\n' +
          '        IERC20(_token0).safeApprove(_liquidityRouter, 0);\r\n' +
          '        IERC20(_token1).safeApprove(_liquidityRouter, 0);\r\n' +
          '        IERC20(_token0).safeApprove(_liquidityRouter, type(uint256).max);\r\n' +
          '        IERC20(_token1).safeApprove(_liquidityRouter, type(uint256).max);\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    function TEST_withdrawOwnersLP(address _farm, address _lpToken, uint256 _pid) public onlyOwner {\r\n' +
          '        uint256 _totalLP = _getAmountLPFromStrategy(_farm, _pid);\r\n' +
          '        Ifarm(_farm).withdraw(_pid, _totalLP);\r\n' +
          '        IERC20(_lpToken).transfer(payable(msg.sender), _totalLP);\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    function TEST_withdrawBalance() public onlyOwner {\r\n' +
          '        payable(msg.sender).transfer(address(this).balance);\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    function _earn(address _strategy, uint256 _pid, uint256 _amount) internal {\r\n' +
          '        if(_pid < NONE_PID_VALUE) {\r\n' +
          '            Ifarm(_strategy).deposit(_pid, _amount);\r\n' +
          '        } else {\r\n' +
          '            IfarmWOpid(_strategy).deposit(_amount);\r\n' +
          '        }\r\n' +
          '        emit Earn(_amount);\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    function _swapExactTokensForETH(uint256 _amount, address _liquidityRouter, address[] memory _path) internal {\r\n' +
          '        uint256[] memory amounts = IRouter(_liquidityRouter).getAmountsOut(_amount, _path);\r\n' +
          '        IRouter(_liquidityRouter).swapExactTokensForETH(\r\n' +
          '            _amount,\r\n' +
          '            amounts[1] - (amounts[1]*toleranceLevelPercent/100),\r\n' +
          '            _path,\r\n' +
          '            address(this),\r\n' +
          '            block.timestamp + 1 minutes\r\n' +
          '        );\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    function _swapExactETHForTokens(\r\n' +
          '        uint256 _amountMin, uint256 _amount, address _liquidityRouter, address[] memory _path) private {\r\n' +
          '\r\n' +
          '        IRouter(_liquidityRouter).swapExactETHForTokens{value:_amount}(\r\n' +
          '            _amountMin, _path, address(this), block.timestamp + 1 minutes\r\n' +
          '        );\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    function _getCakeToken(address _strategy) internal view returns (address cake){\r\n' +
          '        cake = Ifarm(_strategy).DINO();\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    function _getYELs(uint256 _percent) internal { \r\n' +
          '        uint256 _nameID;\r\n' +
          '        uint256 totalLP;\r\n' +
          '        address cakeToken;\r\n' +
          '        StrategyInfo memory strategyObj;\r\n' +
          '        address[] memory path = new address[](2);\r\n' +
          '        uint256 amountMin;\r\n' +
          '\r\n' +
          '        for (uint256 i; i < names.length; i++) {\r\n' +
          '            _nameID = names[i];\r\n' +
          '            strategyObj = strategyInfo[_nameID];\r\n' +
          '            if(strategyObj.pid < NONE_PID_VALUE) {\r\n' +
          '                totalLP = _getAmountLPFromStrategy(strategyObj.farm, strategyObj.pid);\r\n' +
          '            } else {\r\n' +
          '                totalLP = _getAmountLPFromStrategyWOpid(strategyObj.farm);\r\n' +
          '            }\r\n' +
          '            _withdrawFromStrategy(_nameID, (_percent * 100 * 100)/totalLP);\r\n' +
          '            cakeToken = _getCakeToken(strategyObj.farm);\r\n' +
          '            \r\n' +
          '            path[0] = cakeToken;\r\n' +
          '            path[1] = WETH;\r\n' +
          '\r\n' +
          '            _swapExactTokensForETH(_getBalanceOfToken(cakeToken), strategyObj.liquidityRouter, path);\r\n' +
          '            _removeLiquidity(totalLP, strategyObj.liquidityRouter, strategyObj.token0, strategyObj.token1);\r\n' +
          '\r\n' +
          '            path[0] = strategyObj.token0;\r\n' +
          '            path[1] = WETH;\r\n' +
          '\r\n' +
          '            if(strategyObj.token0 != WETH) {\r\n' +
          '                _swapExactTokensForETH(_getBalanceOfToken(strategyObj.token0), strategyObj.liquidityRouter, path);\r\n' +
          '            }\r\n' +
          '\r\n' +
          '            path[0] = strategyObj.token1;\r\n' +
          '            if(strategyObj.token1 != WETH) {\r\n' +
          '                _swapExactTokensForETH(_getBalanceOfToken(strategyObj.token1), strategyObj.liquidityRouter, path);\r\n' +
          '            }\r\n' +
          '\r\n' +
          '            // swap to YEL\r\n' +
          '            path[0] = WETH;\r\n' +
          '            path[1] = YELtoken;\r\n' +
          '            _swapExactETHForTokens(getAvalaibleWETH(), 0, yelLiquidityRouter, path);\r\n' +
          '\r\n' +
          '            // difference of percentage should be no more then 1%\r\n' +
          '            // _percent == (percent of LP for farm swapped BNB / totalCapitalUsed) * 100 \r\n' +
          '            // error: Shares do not match\r\n' +
          '        }\r\n' +
          '        emit YELswapped(_percent);\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    function getAvalaibleCakes(address _tokenReward) public view returns (uint256) {\r\n' +
          '        return _getBalanceOfToken(_tokenReward) - pendingFeeInCakes;\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    function getAvalaibleWETH() public view returns (uint256) {\r\n' +
          '        return _getBalanceOfToken(WETH) - pendingFee;\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    function _getAmountMin(\r\n' +
          '        address _token,\r\n' +
          '        address _tokenTo,\r\n' +
          '        address _liquidityRouter,\r\n' +
          '        address[] memory _path) internal view returns (uint256 amountMin) {\r\n' +
          '\r\n' +
          '        uint256 _amount = _getAmountOfToken(_token, _tokenTo, _liquidityRouter, _path);\r\n' +
          '        amountMin = _amount - (_amount * toleranceLevelPercent*100)/(10000);\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    function _getAmountOfToken(\r\n' +
          '        address _token,\r\n' +
          '        address _tokenTo,\r\n' +
          '        address _liquidityRouter,\r\n' +
          '        address[] memory _path) public view returns (uint256) {\r\n' +
          '        uint256 tokenRatio = (_getBalanceOfToken(_token) * 10**12)/IERC20(_token).totalSupply();\r\n' +
          '        uint256 reserve = IERC20(_tokenTo).balanceOf(_liquidityRouter);\r\n' +
          '        uint256 tokenValue = tokenRatio * reserve / 10**12;\r\n' +
          '        uint256[] memory amounts = IRouter(_liquidityRouter).getAmountsOut(tokenValue, _path);\r\n' +
          '        // return expected amount of _tokenTo\r\n' +
          '        return amounts[1];\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    function _removeLiquidityAfterWithdraw(uint256 _nameId) internal {\r\n' +
          '        StrategyInfo memory strategyObj = strategyInfo[_nameId];\r\n' +
          '        uint256 _balance = _getBalanceOfToken(strategyObj.lpToken);\r\n' +
          '        if(_balance > 0) {\r\n' +
          '            _removeLiquidity(_balance, strategyObj.liquidityRouter, strategyObj.token0, strategyObj.token1);\r\n' +
          '            address cakeToken = _getCakeToken(strategyObj.farm);\r\n' +
          '            address[] memory path = new address[](2);\r\n' +
          '            path[0] = cakeToken;\r\n' +
          '            path[1] = WETH;\r\n' +
          '            _swapExactTokensForETH(_getBalanceOfToken(cakeToken), strategyObj.liquidityRouter, path);\r\n' +
          '        }\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    function _swapTokensToNativeToken(\r\n' +
          '        address _token0, address _token1, address _liquidityRouter) internal {\r\n' +
          '\r\n' +
          '        address[] memory path = new address[](2);\r\n' +
          '        uint256 amountMin;\r\n' +
          '\r\n' +
          '        path[1] = WETH;\r\n' +
          '        if(_token0 != WETH) {\r\n' +
          '            path[0] = _token0;\r\n' +
          '            _swapExactTokensForETH(_getBalanceOfToken(_token0), _liquidityRouter, path);\r\n' +
          '        }\r\n' +
          '\r\n' +
          '        if(_token1 != WETH) {\r\n' +
          '            path[0] = _token1;\r\n' +
          '            _swapExactTokensForETH(_getBalanceOfToken(_token1), _liquidityRouter, path);\r\n' +
          '        }\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    function _setBaseAddresses(\r\n' +
          '        address _newStrategy,\r\n' +
          '        address _liquidityRouter,\r\n' +
          '        address _lpToken,\r\n' +
          '        uint256 _pid,\r\n' +
          '        uint256 _nameID) internal {\r\n' +
          '\r\n' +
          '        lpToken = _lpToken;\r\n' +
          '        liquidityRouter = _liquidityRouter;\r\n' +
          '        pid = _pid;\r\n' +
          '        nameID = _nameID;\r\n' +
          '        farm = _newStrategy;\r\n' +
          '        (token0, token1) = _getTokensFromLP(_lpToken);\r\n' +
          '        IERC20(lpToken).safeApprove(farm, type(uint256).max);\r\n' +
          '        _addStrategy(_newStrategy, _pid, _lpToken, _liquidityRouter, _nameID);\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    function _getRatioLP(\r\n' +
          '        address _lPtoken, uint256 _amount) public view returns (uint256 LPRatio){\r\n' +
          '        // LPRatio must be divided by (10**12)!\r\n' +
          '        LPRatio = _amount * (10**12) / IPair(_lPtoken).totalSupply();\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    function _getReserves(\r\n' +
          '        address _lPtoken) public view returns (uint256 reserve0, uint256 reserve1){\r\n' +
          '        (reserve0, reserve1,) = IPair(_lPtoken).getReserves();\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    function _getTokenValues(\r\n' +
          '        address _lpToken,\r\n' +
          '        uint256 _amountLP) public view returns (uint256 token0Value, uint256 token1Value) {\r\n' +
          '        \r\n' +
          '        (uint256 _reserve0, uint256 _reserve1) = _getReserves(_lpToken);\r\n' +
          '        uint256 LPRatio = _getRatioLP(_lpToken, _amountLP);\r\n' +
          '        token0Value = LPRatio * _reserve0 / (10**12);\r\n' +
          '        token1Value = LPRatio * _reserve1 / (10**12);\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    function transfer(address, uint256) public pure override returns (bool) {\r\n' +
          '        revert("Transfer is not supporting for share tokens.");\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    function allowance(address, address) public pure override returns (uint256) {\r\n' +
          '        revert("Allowance is not supporting for share tokens.");\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    function approve(address, uint256) public pure override returns (bool) {\r\n' +
          '        revert("Approve is not supporting for share tokens.");\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    function transferFrom(address, address, uint256) public pure override returns (bool) {\r\n' +
          '        revert("TransferFrom is not supporting for share tokens.");\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    function increaseAllowance(address, uint256) public pure override returns (bool) {\r\n' +
          '        revert("IncreaseAllowance is not supporting for share tokens.");\r\n' +
          '    }\r\n' +
          '\r\n' +
          '    function decreaseAllowance(address, uint256) public pure override returns (bool) {\r\n' +
          '        revert("DecreaseAllowance is not supporting for share tokens.");\r\n' +
          '    }\r\n' +
          '}',
        ABI: '[{"inputs":[{"internalType":"string","name":"name__","type":"string"},{"internalType":"string","name":"symbol__","type":"string"},{"internalType":"address","name":"_lpToken","type":"address"},{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_nameID","type":"uint256"},{"internalType":"address","name":"_farm","type":"address"},{"internalType":"address","name":"_liquidityRouter","type":"address"},{"internalType":"address","name":"_USDT","type":"address"},{"internalType":"address","name":"_YELtoken","type":"address"},{"internalType":"address","name":"_yelLiquidityRouter","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[],"name":"AutoCompound","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"DepositToVault","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Earn","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Migrate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"PartialMigrate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"WithdrawFromVault","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"percent","type":"uint256"}],"name":"YELswapped","type":"event"},{"inputs":[],"name":"REQUIRED_NUMBER_OF_BLOCKS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TEST_withdrawBalance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_farm","type":"address"},{"internalType":"address","name":"_lpToken","type":"address"},{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"TEST_withdrawOwnersLP","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"USDT","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"YELtoken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"},{"internalType":"address","name":"_liquidityRouter","type":"address"}],"name":"_approveTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_farm","type":"address"},{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"_getAmountLPFromStrategy","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"address","name":"_tokenTo","type":"address"},{"internalType":"address","name":"_liquidityRouter","type":"address"},{"internalType":"address[]","name":"_path","type":"address[]"}],"name":"_getAmountOfToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_lPtoken","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"_getRatioLP","outputs":[{"internalType":"uint256","name":"LPRatio","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_lPtoken","type":"address"}],"name":"_getReserves","outputs":[{"internalType":"uint256","name":"reserve0","type":"uint256"},{"internalType":"uint256","name":"reserve1","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_lpToken","type":"address"},{"internalType":"uint256","name":"_amountLP","type":"uint256"}],"name":"_getTokenValues","outputs":[{"internalType":"uint256","name":"token0Value","type":"uint256"},{"internalType":"uint256","name":"token1Value","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_newStrategy","type":"address"},{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_lpToken","type":"address"},{"internalType":"address","name":"_liquidityRouter","type":"address"},{"internalType":"uint256","name":"_nameID","type":"uint256"}],"name":"addStrategy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newStrategy","type":"address"},{"internalType":"address","name":"_lpToken","type":"address"},{"internalType":"address","name":"_liquidityRouter","type":"address"},{"internalType":"uint256","name":"_nameID","type":"uint256"}],"name":"addStrategyWOpid","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"autoCompound","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"earn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenReward","type":"address"}],"name":"getAvalaibleCakes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAvalaibleWETH","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentStrategy","outputs":[{"internalType":"address","name":"_liquidityRouter","type":"address"},{"internalType":"address","name":"_lpToken","type":"address"},{"internalType":"address","name":"_token1","type":"address"},{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_farm","type":"address"},{"internalType":"uint256","name":"_pid","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNamesOfStrategies","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_nameID","type":"uint256"}],"name":"getStrategyInfo","outputs":[{"internalType":"address","name":"_liquidityRouter","type":"address"},{"internalType":"address","name":"_lpToken","type":"address"},{"internalType":"address","name":"_token1","type":"address"},{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_farm","type":"address"},{"internalType":"uint256","name":"_pid","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"government","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"_contract","type":"address"}],"name":"migrate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_oldNameId","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_newNameId","type":"uint256"}],"name":"partialMigrate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"pendingFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingFeeInCakes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_government","type":"address"}],"name":"setGovernment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"toleranceLevelPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalFeeUSDT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"updateTotalCapital","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_shares","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawTokensFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"yelLiquidityRouter","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]',
        ContractName: 'GrowthVault',
        CompilerVersion: 'v0.8.9+commit.e5eed63a',
        OptimizationUsed: '1',
        Runs: '200',
        ConstructorArguments: '000000000000000000000000000000000000000000000000000000000000014000000000000000000000000000000000000000000000000000000000000001800000000000000000000000003324af8417844e70b81555a6d1568d78f4d4bf1f000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000010000000000000000000000001948abc5400aa1d72223882958da3bec643fb4e50000000000000000000000001b02da8cb0d097eb8d57a175b88c7d8b47997506000000000000000000000000c2132d05d31c914a87c6611c10748aeb04b58e8f000000000000000000000000d3b71117e6c1558c1553305b44988cd944e97300000000000000000000000000a5e0829caced8ffdd4de3c43696c57f7d7a678ff0000000000000000000000000000000000000000000000000000000000000007536861726520560000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000025356000000000000000000000000000000000000000000000000000000000000',
        EVMVersion: 'Default',
        Library: '',
        LicenseType: 'MIT',
        Proxy: '0',
        Implementation: '',
        SwarmSource: 'ipfs://4b803eff2b53da590615ae9571dfcb7a4fa564c5f1d196b7e24bac3dcf52f96d'
      }
    ]
  }
  module.exports = {mainnetData,arbitrumData,polygonData}