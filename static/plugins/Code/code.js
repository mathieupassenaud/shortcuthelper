function help(){
	sendCodes( [VK_F1, VK_F1] );
}

function OpenSymbolInFile(){
	sendCodes( [VK_CONTROL, VK_SHIFT, VK_O, VK_O, VK_SHIFT, VK_CONTROL]);
}

function ZenMode(){
	sendCodes([VK_CONTROL, VK_K, VK_CONTROL, VK_K ]);
	sendCodes([VK_Z, VK_Z]);
}

function SelectAllOccurences(){
	sendCodes([VK_CONTROL, VK_SHIFT, VK_L, VK_L, VK_SHIFT, VK_CONTROL]);
}

function BlockComment(){
	sendCodes([VK_ALT, VK_SHIFT, VK_A, VK_A, VK_SHIFT, VK_ALT]);
}

function OpenSymbolInWorkspace(){
	sendCodes([VK_CONTROL, VK_T, VK_T, VK_CONTROL]);
}