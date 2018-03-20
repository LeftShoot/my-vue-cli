<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'app',
	components: {
	}
}
</script>

<style>
	/*reset part*/
	* {
		-webkit-touch-callout: none;
		-webkit-tap-highlight-color: transparent; }

	html,
	body,
	div,
	span,
	applet,
	object,
	iframe,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	blockquote,
	pre,
	a,
	abbr,
	acronym,
	address,
	big,
	cite,
	code,
	del,
	dfn,
	em,
	font,
	img,
	ins,
	kbd,
	q,
	s,
	samp,
	small,
	strike,
	strong,
	sub,
	sup,
	tt,
	var,
	b,
	u,
	i,
	center,
	dl,
	dt,
	dd,
	ol,
	ul,
	li,
	fieldset,
	form,
	label,
	legend,
	table,
	caption,
	tbody,
	tfoot,
	thead,
	tr,
	th,
	td {
		border:0;padding:0;margin:0;text-decoration:none;
		word-wrap: break-word;
		word-break: break-all;
		-webkit-text-size-adjust: none; }

	body {
		overflow-x: hidden;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none; }

	ul,
	ol {
		list-style: none; }

	select::-ms-expand {
		display: none; }

	a {
		text-decoration: none; }

	/* chrome浏览器搜索框默认会出现关闭按钮 */
	input[type=search]::-ms-clear {
		display: none; }

	input::-webkit-search-cancel-button {
		display: none; }

	img {
		max-width: 100%;
		height: auto; }

	/* 重置输入框样式 */
	input {
		margin: 0;
		padding: 0;
		border: medium none;
		border-radius: 0;
		outline: 0;
		background: none;
		box-shadow: none;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none; }

	.row-1 {
		line-height: inherit;
		display: -webkit-box;
		overflow: hidden;
		height: inherit;
		text-overflow: ellipsis;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1; }

	.row-2 {
		line-height: inherit;
		display: -webkit-box;
		overflow: hidden;
		height: inherit;
		text-overflow: ellipsis;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2; }

	.row-3 {
		line-height: inherit;
		display: -webkit-box;
		overflow: hidden;
		height: inherit;
		text-overflow: ellipsis;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3; }

	.pull-right {
		float: right; }

	.pull-left {
		float: left; }

	.icon {
		display: inline-block;
		background-repeat: no-repeat;
		background-position: center center;
		background-size: cover;
		vertical-align: middle; }

	body {
		font-family: 'Helvetica Neue', Helvetica, STHeiTi, sans-serif;
		color: #333;
		background: #e3e3e3; }

	/*base part*/
   body{
   }

   #app{
	   width: 100%;
	   /*min-width: 1349px;*/
	   min-width: 1250px;
	   /*width: 1250px;*/
	   /*max-width: 1349px;*/
	   margin: 0px auto;
   }
</style>