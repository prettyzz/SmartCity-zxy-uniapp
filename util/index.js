export function upload(){
	return new Promise((resolve,reject)=>{
		uni.chooseImage({
			count:1,
			success:res=>{
				uni.uploadFile({
					url:'http://124.93.196.45:10001/prod-api/common/upload',
					name:'file',
					filePath:res.tempFilePaths[0],
					header:{Authorization:uni.getStorageSync('token')},
					success:res=>{
						if(JSON.parse(res.data).code!==200){
							uni.showToast({
								titile:'获取数据失败'
							})
						}
						resolve('prode-api/'+JSON.parse(res.data).fileName)
					},
					fail:err=>reject(err)
					
				})
			}
		})
	})
}