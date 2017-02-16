//引入构造函数F
function F (selector) { 

	[].push.apply( this, F.select( selector ) );

 };
 //给F添加实例each方法
 F.prototype.each = function ( callback ) { 

 	return F.each( this, callback );
  };
 //给F添加实例map方法
 F.prototype.map = function ( callback ) { 

 	return F.map ( this, callback )
  };
 //给F添加获取元素的方法
 F.select = function ( selector ) { 

 	return document.querySelectorAll( selector );
  };
 //添加判断数组的方法
 F.isArrayLike = function ( obj ) { 

 	if ( Object.prototype.toString.call( obj ) == '[ object Array ]' ) {

 		return true;
 	}

 	var length = 'length' in obj && obj.length;

 	return typeof length === 'number' && length >= 0;

 };
 //给F添加each静态方法
 F.each = function ( arr, callback ) { 

 		if( F.isArrayLike (arr) ) { 

 			for( var i = 0; i < arr.length;  i++ ) { 

 				if( callback.call( arr[ i ], arr[ i ], i ) === false ) break;
 			 };

 		 }else { 

 			for ( var k in arr ) { 

 				if( callback.call( arr[ k ], arr[ k ], k ) === false ) break;

 			 	 };

 			  };

 			  return arr;

 };
 //给F添加map静态方法
 F.map = function ( arr, callback ) { 

 	var newArr = [], tmp;

 	if ( F.isArrayLike ( arr ) ) { 

 		for( var i = 0; i < arr.length; i++ ) { 

 			tmp = callback( arr[ i ], i );

 			if( tmp != null ) { 

 				newArr.push( tmp );
 			 };
 		 };
 	 } else { 

 	 	for( var k in arr ) { 
 	 		tmp = callback( arr[ i ], i );
 	 		if ( tmp != null ) {

 	 			newArr.push( tmp );
 	 		};
 	 	 }
 	  }
 	  return newArr;
 };