// react-syntax-highlighterのstyleをインポート
import { dark, coy, funky, okaidia, solarizedlight, tomorrow, twilight, prism, atomDark, base16AteliersulphurpoolLight, cb, darcula, duotoneDark, duotoneEarth, duotoneForest, duotoneLight, duotoneSea, duotoneSpace, ghcolors, hopscotch, pojoaque, vs, xonokai} from 'react-syntax-highlighter/dist/esm/styles/prism';

// ハイライトするコードの設定
export default {
	pages: {
		Top: null,
		Page1: {
			Section1: {
				code1: "\"homepage\": \".\"",
			},
			Section2: {
				code1: "<div id=\"contents\"></div>",
				code2: "import React from 'react';\nimport ReactDOM from 'react-dom';\n\nReactDOM.render(\n    <>\n        <p>Hellow World!</p>\n    </>,\n    document.getElementById('contents')\n);",
				code3: "module.exports= {\n    entry: './app.js',\n    output: {\n        path: './dist',\n        filename: 'bundle.js'\n    },\n    module: {\n        rules: [\n            {\n                test: /.js$/,\n                exclude: /node_modules/,\n                loader: 'babel-loader'\n            }\n        ]\n    }\n}",
				code4: "<script src=\"./dist/bundle.js\"></script>",
				code5: "{\"presets\": [\"react\", \"es2015\"]}",
				code6: "\"scripts\": {\n    \"test\": \"echo \\\"Error: no test specified\\\" && exit 1\",\n    \"build\": \"webpack\",\n    \"start\": \"webpack-dev-server --hot --inline\"\n}",
			},
			Section3: {
				code1: "REACT_APP_NAME=\"React Learning\"",
				code2: "process.env.{KEY名}",
				code3: "process.env.REACT_APP_NAME",
			},
		},
		Page2: {
			Section1: {
				code1: "Project\n    - build\n    - public\n        - index.html\n        - manifest.json\n    - src\n        - App.js\n        - App.css\n        - index.js\n        - index.css\n        - serviceWorker.js\n    - node_modules\n    - package.json",
			},
			Section2: {
				code1: "import React from 'react';\nimport logo from './logo.svg';\nimport './App.css';\n\nfunction App() {\n  return (\n    <div className=\"App\">\n      <header className=\"App-header\">\n        <img src={logo} className=\"App-logo\" alt=\"logo\" />\n        <p>\n          Edit <code>src/App.js</code> and save to reload.\n        </p>\n        <a\n          className=\"App-link\"\n          href=\"https://reactjs.org\"\n          target=\"_blank\"\n          rel=\"noopener noreferrer\"\n        >\n          Learn React\n        </a>\n      </header>\n    </div>\n  );\n}\n\nexport default App;",
				code2: "import React from 'react';\nimport ReactDOM from 'react-dom';\nimport './sass/index.scss';\nimport App from './App';\nimport * as serviceWorker from './serviceWorker';\n\nReactDOM.render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>,\n  document.getElementById('root')\n);\n\n// If you want your app to work offline and load faster, you can change\n// unregister() to register() below. Note this comes with some pitfalls.\n// Learn more about service workers: https://bit.ly/CRA-PWA\nserviceWorker.unregister();",
			},
		},
		Page3: {
			Section1: {
				code1: "import React from 'react'",
				code2: "import ReactDOM from 'react-dom'",
				code3: "import Styles from './style.module.css'",
				code4: "import Image from './image.png'",
				code5: "import React from 'react';\nimport Image from './images/sample.png';\nimport Styles from './style.module.css'\n\nconst Sample = ({user}) => {\n  return (\n	<>\n		<p className={Styles.hello}>\n            Hello {user}!\n        </p>\n        <img src={Image} alt=\"sample\" />\n	</>\n  );\n};\nexport default Sample;",
			},
			Section2: {
				code1: "import React from 'react';\n\nconst Header = () => {\n  return (\n	<header className=\"header\">\n		<div className=\"header-title\">\n            ヘッダーエリア\n        </div>\n	</header>\n  );\n};\nexport default Header;",
				code2: "import React from 'react';\nimport PageRouter from './../routes/pageRouter';\n\nconst MainContents = ({state}) => {\n  return (\n	<main className=\"main\">\n		<div className=\"main-title\">\n            メインコンテンツーエリア\n            <PageRouter state={state} />\n        </div>\n	</main>\n  );\n};\nexport default MainContents;",
				code3: "import React from 'react';\n\nconst Footer = () => {\n  return (\n	<footer className=\"footer\">\n		<div className=\"footer-title\">\n            フッターエリア\n        </div>\n	</footer>\n  );\n};\nexport default Footer;",
				code4: "import React from 'react';\nimport Page1 from './../pages/page1';\nimport Page2 from './../pages/page2';\n\nconst PageRouter = ({state}) => {\n  return (\n	<>\n        {state.page === \"1\" && <Page1 />}\n        {state.page === \"2\" && <Page2 />}\n    </>\n  );\n};\nexport default PageRouter;",
				code5: "import Header from './parts/header';\nimport MainContents from './parts/mainContents';\nimport Footer from './parts/footer';",
				code6: "<>\n    <Header />\n    <MainContents state={this.state}/>\n    <Footer />\n</>",
				code7: "import ReactDOM from 'react-dom';\n...(省略)...\n\nReactDOM.render(\n    <React.StrictMode>\n        <Layout />\n    </React.StrictMode>,\n    document.getElementById('root')\n);",
				code8: "<div id=\"root\"></div>",
				code9: "import React from 'react';\nimport ReactDOM from 'react-dom';\nimport Header from './parts/header';\nimport MainContents from './parts/mainContents';\nimport Footer from './parts/footer';\n\nclass Layout extends React.Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            page: \"1\"\n        }\n    }\n\n    render () {\n        return (\n            <>\n                <Header />\n                <MainContents state={this.state}/>\n                <Footer />\n            </>\n        );\n    }\n}\n\nReactDOM.render(\n    <React.StrictMode>\n        <Layout />\n    </React.StrictMode>,\n    document.getElementById('root')\n);",
			},
			Section3: {
				code1: "constructor(props) {\n    super(props);\n        this.state = {\n            x:0,\n    }\n}",
				code2: "{this.state.x === 0 ? \"Learn React\" : \"Try React\"}",
				code3: "func() {\n    this.state.x === 0 ? (this.setState({x:1})) : (this.setState({x:0}));\n}",
				code4: "<button onClick={this.func.bind(this)}>Change State</button>",
				code5: "import React from 'react';\n\nclass App extends React.Component{\n\nconstructor(props) {\n    super(props);\n        this.state = {\n                x:0,\n    }\n}\n\nfunc() {\n    this.state.x === 0 ? (this.setState({x:1})) : (this.setState({x:0}));\n}\n\nrender() {\n    return(\n        <header className=\"header>\n            <p>\n                {this.state.x === 0 ? \"Learn React\" : \"Try React\"}\n            </p>\n            <button onClick={this.func.bind(this)}>Change State</button>\n        </header>\n        );\n    }\n}\nexport default App;",
			},
			Section4: {
				code1: "import App from './component/App';",
				code2: "ReactDOM.render(\n    <React.StrictMode>\n        <Appcomment=\"React Application\"/>\n    </React.StrictMode>\n    document.getElementById('root')\n);",
				code3: "class Sample extends React.Component{\n    render() {\n        return(\n            <header className=\"header\">\n                <p>{this.props.comment}</p>\n            </header>\n        );\n    }\n}\nexport default Sample;",
				code4: "const Sample = ({comment}) =>{\n    return(\n        <header className=\"header\">\n            <p>{comment}</p>\n        </header>\n    );\n}\nexport default Sample;",
				code5: "function Sample(comment) {\n    return(\n        <header className=\"header\">\n            <p>{comment}</p>\n        </header>\n    );\n}\nexport default Sample;",
			},
			Section5: {
				code1: "import React from 'react'\n\nconst Layout = ({children}) => {\n    return (\n        <>\n            <header />\n            <main>\n                {children}\n            </main>\n            <footer />\n        </>\n    );\n}\nexport default Layout",
				code2: "import React from 'react'\nimport Layout from './layout'\n\nconst Page = () => {\n    return (\n        <Layout>\n            {/* 子要素として表示したい内容 */}\n        </Layout>\n    );\n}\nexport default Page",
				code3: "/***** childrenの設定 *****/\n// childrenに渡すPropsの設定\nconst additionalProps = {\n    sample: \"sample\"\n}\n// 子要素を再生成してPropsを渡す設定\nconst newChildren = React.cloneElement(children, additionalProps);",
			},
		},
		Page4: {
			Section1: {
				code1: "",
				code2: "",
				code3: "",
				code4: "",
			},
			Section2: {
				code1: "import React from 'react';\n\nconst Page1 = ({title}) => {\n  return (\n	<div className=\"pages\">\n		<div className=\"pages-header\">\n			{title}\n		</div>\n		<div className=\"pages-contents\">\n			…メインコンテンツを表示…\n		</div>\n	</div>\n  );\n};\nexport default Page1;\n",
				code2: "import React from 'react';\nimport Page1 from './../pages/page1';\nimport Page2 from './../pages/page2';\n\nconst PageRouter = ({state}) => {\n  return (\n	<>\n        {state.page === \"1\" && <Page1 />}\n        {state.page === \"2\" && <Page2 />}\n    </>\n  );\n};\nexport default PageRouter;\n",
				code3: "import React from 'react';\nimport Page1 from './../pages/page1';\nimport Page2 from './../pages/page2';\n\nconst PageRouter = ({state}) => {\n\n	const Pages = [\n		{\n			Component: Page1,\n			State: \"1\"\n		},\n		{\n			Component: Page2,\n			State: \"2\"\n		}\n	];\n\n  return (\n	<>\n		{Pages.map(Page => {\n            return (\n                <React.Fragment key={Page.State}>\n			        {state.page === Page.State && <Page.Component />}\n                </React.Fragment>\n            );\n		})}\n    </>\n  );\n};\n\nexport default PageRouter;",
			},
		},
		Page5: {
			Section2: {
				code1: "import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';",
				code2: "import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';",
				code3: "<SyntaxHighlighter language={language} style={dark}>\n	{codeString}\n</SyntaxHighlighter>",
				code4: "import React from 'react';\nimport { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';\nimport { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';\n\nconst CodeHighlighter = ({codeString, language}) => {\n  return (\n	<div className=\"p code\">\n		<SyntaxHighlighter language={language} style={dark}>\n			{codeString}\n		</SyntaxHighlighter>\n	</div>\n  );\n};\nexport default CodeHighlighter;\n",
			},
			Section3: {
				code1: "import Select from 'react-select';",
				code2: "const options = [\n  { value: 'sample1', label: 'サンプル1' },\n  { value: 'sample2', label: 'サンプル2' },\n  { value: 'sample3', label: 'サンプル3' },\n  { value: 'sample4', label: 'サンプル4' },\n];",
				code3: " <Select options={options} />",
				code4: "import React from 'react';\nimport Select from 'react-select';\n\nconst options = [\n  { value: 'sample1', label: 'サンプル1' },\n  { value: 'sample2', label: 'サンプル2' },\n  { value: 'sample3', label: 'サンプル3' },\n  { value: 'sample4', label: 'サンプル4' },\n];\n\nconst Sample = () => {\n  return (\n    <Select options={options} />\n  );\n}\n\nexport default Sample;",
				code5: "",
			},
			Section4: {
				code1: "import Dropzone from 'react-dropzone';",
				code2: "onDrop = (acceptedFiles) => {\n    console.log(acceptedFiles);\n  }",
				code3: "<Dropzone onDrop={this.onDrop}>\n    {({getRootProps, getInputProps}) => (\n        <div {...getRootProps()}>\n            <input {...getInputProps()} />\n            [ クリックしてファイルを選択 ]\n        </div>\n    )}\n</Dropzone>",
				code4: "import React, { Component } from 'react';\nimport Dropzone from 'react-dropzone'\n\nclass Sample extends Component {\n\n    onDrop = (acceptedFiles) => {\n        console.log(acceptedFiles);\n    }\n\n    render() {\n        return (\n            <Dropzone onDrop={this.onDrop}>\n                {({getRootProps, getInputProps}) => (\n                    <div {...getRootProps()}>\n                        <input {...getInputProps()} />\n                        [ クリックしてファイルを選択 ]\n                    </div>\n                )}\n            </Dropzone>\n        );\n    }\n}\n\nexport default Sample;",
				code5: "import { useDropzone } from 'react-dropzone'",
				code6: "// Propsに渡す値を定義\nconst accept = \"image/png, image/jpeg, image/bmp, image/gif\"\n// Dropzoneの使用するhooksを定義し、Propsは上記定義の「accept」を使用\nconst {acceptedFiles, getRootProps, getInputProps, isDragActive, isDragReject} = useDropzone({accept})",
				code7: "// ドロップされたファイルに対する処理\nconst files = acceptedFiles.map(file => (\n    <React.Fragment key={file.name}>\n        <p>\n            ■ ファイル : {file.name}\n        </p>\n        <p>\n            name : {file.path}\n        </p>\n        <p>\n            size : {file.size}\n        </p>\n        <p>\n            type : {file.type}\n        </p>\n        {console.log(file)}\n    </React.Fragment>\n));",
				code8: "<div {...getRootProps()}>\n    <input {...getInputProps()} />\n    ...省略...\n    { isDragActive && !isDragReject && (...省略...)}\n    ...省略...\n</div>",
				code9: "import React from 'react'\nimport { useDropzone } from 'react-dropzone'\n\nfunction Dropzone() {\n\n	// Propsに渡す値を定義\n    const accept = \"image/png, image/jpeg, image/bmp, image/gif\";\n    \n	// Dropzoneの使用するhooksを定義し、Propsは上記定義の「accept」を使用\n	const {acceptedFiles, getRootProps, getInputProps, isDragActive, isDragReject} = useDropzone({accept});\n\n	// ドロップされたファイルに対する処理\n	const files = acceptedFiles.map(file => (\n		<React.Fragment key={file.name}>\n			<p>\n				■ ファイル : {file.name}\n			</p>\n			<p>\n				name : {file.path}\n			</p>\n			<p>\n				size : {file.size}\n			</p>\n			<p>\n				type : {file.type}\n			</p>\n			{console.log(file)}\n		</React.Fragment>\n	));\n\n  return (\n	<>\n        <div {...getRootProps()}>\n            <input {...getInputProps()} />\n            { // 初期の表示\n                !isDragActive &&\n                    (\n                        <div>\n                            <p>\n                                [ ここにファイルをドロップする ]\n                            </p>\n                            <p>\n                                もしくは\n                            </p>\n                            <p>\n                                [ クリックしてファイルを選択 ]\n                            </p>\n                        </div>\n                    )\n            }\n            { // 許容ファイルのドラッグ時\n                isDragActive && !isDragReject &&\n                    (\n                        <div>\n                            <p>\n                                [ ここにファイルをドロップします ]\n                            </p>\n                        </div>\n                    )\n            }\n            { // 不許可ファイルのドラッグ時\n                isDragReject &&\n                    (\n                        <div>\n                            <p>\n                                [ ファイルタイプが不正なものです ]\n                            </p>\n                        </div>\n                    )\n            }\n        </div>\n        <div>\n            <p>\n                [ ここにファイル名が表示される ]\n            </p>\n            {files}\n        </div>\n	</>\n  )\n}\nexport default Dropzone",
			},
			Section7: {
				code1: "import Draggable from 'react-draggable';",
				code2: "<Draggable\n    axis=\"both\"\n    handle=\".handle\"\n    grid={[1, 1]}\n    scale={1}\n    defaultPosition={{x: 0, y: 0}}\n    position={this.state.positon}\n    onStart={this.onStart}\n    onDrag={this.onDrag}\n    onStop={this.onStop}\n>\n    <div className=\"handle\">\n        ここをドラッグできます\n    </div>\n</Draggable>",
				code3: "onStart(e, position){\n    document.getElementsByClassName('handle').textContent = \"ここをドラッグできます\";\n}\nonDrag(e, position){\n    document.getElementsByClassName('handle').textContent = \"ドラッグ中です\";\n    const {x, y} = position;\n    this.setState({\n        position: {x, y}\n    });\n}\nonStop(e, position){\n    const {x, y} = position;\n    localStorage.setItem('position_x', x);\n    localStorage.setItem('position_y', y);\n}",
				code4: "import React from 'react';\nimport Draggable from 'react-draggable';\n\nclass DaraggableComponent extends React.Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            componentPosition: {\n              x: parseInt(localStorage.getItem('position_x'), 10) || 0,\n              y: parseInt(localStorage.getItem('position_y'), 10) || 0\n            }\n          }\n    }\n    onStart(e, position){\n        document.getElementsByClassName('handle').textContent = \"ここをドラッグできます\";\n    }\n    onDrag(e, position){\n        document.getElementsByClassName('handle').textContent = \"ドラッグ中です\";\n        const {x, y} = position;\n        this.setState({\n            position: {x, y}\n        });\n    }\n    onStop(e, position){\n        const {x, y} = position;\n        localStorage.setItem('position_x', x);\n        localStorage.setItem('position_y', y);\n    }\n    render() {\n        return (\n            <Draggable\n                axis=\"both\"\n                handle=\".handle\"\n                grid={[1, 1]}\n                scale={1}\n                defaultPosition={{x: 0, y: 0}}\n                position={this.state.positon}\n                onStart={this.onStart}\n                onDrag={this.onDrag}\n                onStop={this.onStop}\n            >\n                <div className=\"handle\">\n                    ここをドラッグできます\n                </div>\n            </Draggable>\n        );\n    }\n}\nexport default DaraggableComponent",
			},
			Section8: {
				code1: "import SwipeableViews from 'react-swipeable-views';",
				code2: "<SwipeableViews\n    enableMouseEvents\n    action={()=> sessionStorage.setItem(\"action\", 1)}\n    index={3}\n    animateTransitions={true}\n    resistance\n    threshold={5}\n    onChangeIndex={()=> sessionStorage.setItem(\"onChangeIndex\", sessionStorage.getItem(\"onChangeIndex\")+1)}\n    onSwitching={()=> sessionStorage.setItem(\"onSwitching\", sessionStorage.getItem(\"onSwitching\")+1)}\n    springConfig={{tension: 300, friction: 30}}\n>\n    <div className={Styles.red}>\n        ◀︎ Red Area\n    </div>\n    <div className={Styles.yellow}>\n        ◀︎ Yellow Area ▶︎\n    </div>\n    <div className={Styles.green}>\n        ◀︎ Green Area ▶︎\n    </div>\n    <div className={Styles.blue}>\n        ◀︎ Blue Area ▶︎\n    </div>\n    <div className={Styles.purple}>\n        Purple Area ▶︎\n    </div>\n</SwipeableViews>",
			},
			Section9: {
				code1: "import Modal from 'react-modal';",
				code2: "Modal.setAppElement('#root');",
				code3: "// モーダル表示時の処理\nfunction openModal() {\n    setModalIsOpen(true);\n}\n\n// モーダル表示後の処理\nfunction afterOpenModal() {\n    document.getElementById('title').style.color = '#61dafb';\n}\n\n// モーダル閉じた後の処理\nfunction closeModal() {\n    setModalIsOpen(false);\n}",
				code4: "<button\n    onClick={openModal}\n>\n    モーダル表示ボタン\n</button>",
				code5: "<Modal\n    isOpen={modalIsOpen}\n    onAfterOpen={afterOpenModal}\n    onRequestClose={closeModal}\n    style={customStyles}\n    contentLabel=\"Example Modal\"\n>\n    <h2>\n        モーダルタイトル\n    </h2>\n    <p >\n        テキスト\n    </p>\n    <button onClick={closeModal} >\n        閉じる\n    </button>\n</Modal>",
				code6: "import React, { useState } from 'react';\nimport Modal from 'react-modal';\nimport Styles from './../../sass/parts/modal.module.scss'\n\n// モーダルウィンドウのCSS設定\nconst customStyles = {\n	// 背景のCSS設定\n	overlay : {\n\n	},\n	// モーダルウィンドウのCSS設定\n	content : {\n		top                   : '50%',\n		left                  : '50%',\n		right                 : 'auto',\n		bottom                : 'auto',\n		marginRight           : '-50%',\n		transform             : 'translate(-50%, -50%)',\n		background            : '#282c34',\n	}\n};\n\n//任意のアプリを設定する　create-react-appなら#root\nModal.setAppElement('#root');\n\nconst ModalWindow = ({title, content, openBtn}) => {\n\n	// State設定\n	const [modalIsOpen, setModalIsOpen] = useState(false);\n\n	// モーダル表示時の処理\n	function openModal() {\n		setModalIsOpen(true);\n	}\n\n	// モーダル表示後の処理\n	function afterOpenModal() {\n		document.getElementById('title').style.color = '#61dafb';\n	}\n\n	// モーダル閉じた後の処理\n	function closeModal() {\n		setModalIsOpen(false);\n	}\n\n	return (\n		<div>\n		<button\n			onClick={openModal}\n			className={Styles.openModal}\n		>\n			{openBtn}\n		</button>\n		<Modal\n			isOpen={modalIsOpen}\n			onAfterOpen={afterOpenModal}\n			onRequestClose={closeModal}\n			style={customStyles}\n			contentLabel=\"Example Modal\"\n		>\n			<h2\n				id=\"title\"\n				className={Styles.title}\n			>\n				{title}\n			</h2>\n			<p\n				id=\"content\"\n				className={Styles.content}\n			>\n				{content}\n			</p>\n			<button\n				onClick={closeModal}\n				className={Styles.closeModal}\n			>\n				閉じる\n			</button>\n		</Modal>\n		</div>\n	);\n}\nexport default ModalWindow;\n",
			},
			Section13: {
				code1: "import PropTypes from 'prop-types';",
				code2: "class Greeting extends React.Component {\n  render() {\n    return (\n      <h1>Hello, {this.props.name}</h1>\n    );\n  }\n}\n\nGreeting.propTypes = {\n  name: PropTypes.string\n};",
				code3: "const customProp = (props, propName, componentName) => {\n    if (!/test/.test(props[propName])) {\n        return new Error(\n        'Invalid prop `' + propName + '` supplied to' +\n        ' `' + componentName + '`. Validation failed.'\n        );\n    }\n}\n\n// カスタムルールの使用\nコンポーネント名.propTypes = {\n    props名: customProp\n}",
				code4: "コンポーネント名.defaultProps = {\n    props名: 値\n}\n\n// 例\nComponent.defaultProps = {\n    value: 'default'\n}",
			},
			Section14:{
				code1: "import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';",
				code2: "<BrowserRouter basename={process.env.PUBLIC_URL}>\n    <Link to=\"/Top\">\n        /Top\n    </Link><br/>\n    <Link to=\"/Page1/Section1\">\n        /Page1/Section1\n    </Link><br/>\n    <Link to=\"/Page1/Section2\">\n        /Page1/Section2\n    </Link>\n    <Switch>\n        <Route path=\"/Top\" component={Pages.Top.Top} />\n        <Route path=\"/Page1/Section1\" component={Pages.Page1.Section1.Environment} />\n        <Route path=\"/Page1/Section2\" component={Pages.Page1.Section2.EnvironmentM} />\n    </Switch>\n</BrowserRouter>",
				code3: "import React from 'react';\nimport Pages from './../../../config/pages';\nimport { BrowserRouter, Route, Switch, Link} from 'react-router-dom';\n\nconst ReactRouter = () => {\n	return (\n        <BrowserRouter basename={process.env.PUBLIC_URL}>\n            <Link to=\"/Top\">\n                /Top\n            </Link><br/>\n            <Link to=\"/Page1/Section1\">\n                /Page1/Section1\n            </Link><br/>\n            <Link to=\"/Page1/Section2\">\n                /Page1/Section2\n            </Link>\n            <Switch>\n                <Route path=\"/Top\" component={Pages.Top.Top} />\n                <Route path=\"/Page1/Section1\" component={Pages.Page1.Section1.Environment} />\n                <Route path=\"/Page1/Section2\" component={Pages.Page1.Section2.EnvironmentM} />\n            </Switch>\n        </BrowserRouter>\n	);\n}\nexport default ReactRouter;\n",
			},
			Section15: {
				code1: "import { Helmet } from 'react-helmet';",
				code2: "const Sample = () => {\n  render () {\n    return (\n        <div className=\"app\">\n            <Helmet>\n                <meta charSet=\"utf-8\" />\n                <title>Sample Title</title>\n                <link rel=\"canonical\" href=\"http://mysite.com/example\" />\n            </Helmet>\n            ...\n        </div>\n    );\n  }\n}\nexprt default Sample;",
				code3: "<Helmet\n    htmlAttributes={{\n        lang: 'ja',\n    }}\n    title=\"Gastbyサンプル\"\n    meta={[\n        { name: 'description', content: 'このページはGastbyサンプルです。' }\n    ]}\n/>",
			},
			Section16: {
				code1: "// 通常の複数クラス設定の場合\nimport classNames from 'classnames';\n// Objectでクラスに別名をつけて設定の場合\nimport classNames from 'classnames/bind';\n// 重複するクラス名は無視する設定の場合\nimport classNames from 'classnames/dedupe';",
				code2: "classNames('foo', 'bar'); // => 'foo bar'\nclassNames('foo', { bar: true }); // => 'foo bar'\nclassNames({ 'foo-bar': true }); // => 'foo-bar'\nclassNames({ 'foo-bar': false }); // => ''\nclassNames({ foo: true }, { bar: true }); // => 'foo bar'\nclassNames({ foo: true, bar: true }); // => 'foo bar'\n \n// 様々な方法でクラス名を指定した場合\nclassNames('foo', { bar: true, duck: false }, 'baz', { quux: true }); // => 'foo bar baz quux'\n \n// 不正な値は無視される\nclassNames(null, false, 'bar', undefined, 0, 1, { baz: null }, ''); // => 'bar 1'",
				code3: "classNames('foo', 'foo', 'bar'); // => 'foo bar'\nclassNames('foo', { foo: false, bar: true }); // => 'bar'",
				code4: "var styles = {\n    foo: 'abc',\n    bar: 'def',\n    baz: 'xyz'\n  };\n   \nvar cx = classNames.bind(styles);\n\nvar className = cx('foo', ['bar'], { baz: true }); // => 'abc def xyz'",
				code5: "",
			},
			Section17: {
				code1: "import onClickOutside from 'react-onclickoutside'",
				code2: "handleClickOutside() {\n    this.setState({\n        areaOpen: false,\n    });\n}",
				code3: "export default onClickOutside(DropDownMenu)",
				code4: "import React from 'react'\nimport onClickOutside from 'react-onclickoutside'\n \nconst DropDownMenu = () => {\n\n    handleClickOutside() {\n        this.setState({\n            areaOpen: false,\n        });\n    }\n \n    return (\n        <div>\n            ドロップダウンメニュー\n        </div>\n    );\n}\nexport default onClickOutside(DropDownMenu)\n",
			},
			Section18: {
				code1: "import Markdown from 'react-markdown';",
				code2: "const markdown = (\n    '# 見出し 1\\n' +\n    '## 見出し 2\\n' +\n    '### 見出し 3\\n' +\n    '#### 見出し 4\\n' +\n    '---\\n' +\n    '- リスト 1\\n' +\n    '- リスト 2\\n' +\n    '- リスト 2-1\\n' +\n    '1. 番号付きリスト 1\\n' +\n    '2. 番号付きリスト 2\\n' +\n    '3. 番号付きリスト 3\\n' +\n    '[リンク](http://...)\\n' +\n    '**強調**\\n' +\n    '```ruby:filename.rb\\n' +\n    'コード\\n' +\n    '```'\n);",
				code3: "<Markdown\n    source={markdown}\n    escapeHtml={false}\n    linkTarget=\"_blank\"\n/>",
				code4: "import React from 'react';\nimport Markdown from 'react-markdown';\n\nconst ReactMarkdown = () => {\n\n	const markdown = (\n		'# 見出し 1\\n' +\n		'## 見出し 2\\n' +\n		'### 見出し 3\\n' +\n		'#### 見出し 4\\n' +\n		'---\\n' +\n		'- リスト 1\\n' +\n		'- リスト 2\\n' +\n		'- リスト 2-1\\n' +\n		'1. 番号付きリスト 1\\n' +\n		'2. 番号付きリスト 2\\n' +\n		'3. 番号付きリスト 3\\n' +\n		'[リンク](http://...)\\n' +\n		'**強調**\\n' +\n		'```ruby:filename.rb\\n' +\n		'コード\\n' +\n		'```'\n	);\n\n	return (\n		<div>\n            <Markdown\n                source={markdown}\n                escapeHtml={false}\n                linkTarget=\"_blank\"\n            />\n		</div>\n	);\n}\nexport default ReactMarkdown;\n",
			},
		},
		Page6: {
			Section1:{
				code1: "import React, { useState } from 'react';\n\nfunction Example() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>\n        Click me\n      </button>\n    </div>\n  );\n}",
			},
			Section2:{
				code1: "class Example extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      count: 0\n    };\n  }\n\n  render() {\n    return (\n      <div>\n        <p>You clicked {this.state.count} times</p>\n        <button onClick={() => this.setState({ count: this.state.count + 1 })}>\n          Click me\n        </button>\n      </div>\n    );\n  }\n}",
				code2: "import React, { useState } from 'react';\n\nfunction Example() {\n  // Declare a new state variable, which we'll call \"count\"\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>\n        Click me\n      </button>\n    </div>\n  );\n}",
				code3: "class Example extends React.Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            count: 0\n        }\n    }\n\n    componentDidMount() {\n        document.title = `You clicked ＄{this.state.count} times`;\n    }\n    componentDidUpdate() {\n        document.title = `You clicked ＄{this.state.count} times`;\n    }\n\n    render() {\n        return (\n            <div>\n                <p>You clicked {this.state.count} times</p>\n                <button onClick={() => this.setState({ count: this.state.count + 1 })}>\n                    Click me\n                </button>\n            </div>\n        );\n    }\n}\nexport default Example",
				code4: "import React, { useState, useEffect } from 'react';\n\nfunction Example() {\n  const [count, setCount] = useState(0);\n\n  // Similar to componentDidMount and componentDidUpdate:\n  useEffect() => {\n    // Update the document title using the browser API\n    document.title = `You clicked ＄{count} times`;\n  });\n\n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>\n        Click me\n      </button>\n    </div>\n  );\n}",
				code5: "useEffect() => {\n    document.title = `You clicked ＄{count} times`;\n  }, []);",
				code6: "class FriendStatus extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { isOnline: null };\n    this.handleStatusChange = this.handleStatusChange.bind(this);\n  }\n\n  componentDidMount() {\n    ChatAPI.subscribeToFriendStatus(\n      this.props.friend.id,\n      this.handleStatusChange\n    );\n  }\n  componentWillUnmount() {\n    ChatAPI.unsubscribeFromFriendStatus(\n      this.props.friend.id,\n      this.handleStatusChange\n    );\n  }\n  handleStatusChange(status) {\n    this.setState({\n      isOnline: status.isOnline\n    });\n  }\n\n  render() {\n    if (this.state.isOnline === null) {\n      return 'Loading...';\n    }\n    return this.state.isOnline ? 'Online' : 'Offline';\n  }\n}",
				code7: "import React, { useState, useEffect } from 'react';\n\nfunction FriendStatus(props) {\n  const [isOnline, setIsOnline] = useState(null);\n\n  useEffect() => {\n    function handleStatusChange(status) {\n      setIsOnline(status.isOnline);\n    }\n    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);\n    // Specify how to clean up after this effect:\n    return function cleanup() {\n      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);\n    };\n  });\n\n  if (isOnline === null) {\n    return 'Loading...';\n  }\n  return isOnline ? 'Online' : 'Offline';",
			},
			Section3:{
				code1: "function useSample() {\n    return (\n        ...処理を記載...\n    );\n}",
				code2: "import { useSample } from './component/sample'",
			},
			Section4:{
				code1: "const [state, setState] = useState(initialState);",
				code2: "setState(newState);",
				code3: "function Counter({initialCount}) {\n  const [count, setCount] = useState(initialCount);\n  return (\n    <>\n      Count: {count}\n      <button onClick={() => setCount(initialCount)}>Reset</button>\n      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>\n      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>\n    </>\n  );\n}",
				code4: "useEffect(didUpdate);",
				code5: "useEffect(\n  () => {\n    const subscription = props.source.subscribe();\n    return () => {\n      subscription.unsubscribe();\n    };\n  },\n  [props.source],\n);",
				code6: "const value = useContext(MyContext);",
				code7: "const themes = {\n  light: {\n    foreground: \"#000000\",\n    background: \"#eeeeee\"\n  },\n  dark: {\n    foreground: \"#ffffff\",\n    background: \"#222222\"\n  }\n};\n\nconst ThemeContext = React.createContext(themes.light);\n\nfunction App() {\n  return (\n    <ThemeContext.Provider value={themes.dark}>\n      <Toolbar />\n    </ThemeContext.Provider>\n  );\n}\n\nfunction Toolbar(props) {\n  return (\n    <div>\n      <ThemedButton />\n    </div>\n  );\n}\n\nfunction ThemedButton() {\n  const theme = useContext(ThemeContext);\n  return (\n    <button style={{ background: theme.background, color: theme.foreground }}>\n      I am styled by theme context!\n    </button>\n  );\n}",
			},
		},
	},
	languages: {
		jsx: "jsx",
		javascript: "javascript",
		html: "html",
		css: "css",
		sass: "sass",
		json: "json",
		unset: "unset",
	},
	styles: {
		"dark": dark,
		"coy": coy,
		"funky": funky,
		"okaidia": okaidia,
		"solarizedlight": solarizedlight,
		"tomorrow": tomorrow,
		"twilight": twilight,
		"prism": prism,
		"atomDark": atomDark,
		"base16AteliersulphurpoolLight": base16AteliersulphurpoolLight,
		"cb": cb,
		"darcula": darcula,
		"duotoneDark": duotoneDark,
		"duotoneEarth": duotoneEarth,
		"duotoneForest": duotoneForest,
		"duotoneLight": duotoneLight,
		"duotoneSea": duotoneSea,
		"duotoneSpace": duotoneSpace,
		"ghcolors": ghcolors,
		"hopscotch": hopscotch,
		"pojoaque": pojoaque,
		"vs": vs,
		"xonokai": xonokai,
	}
}
