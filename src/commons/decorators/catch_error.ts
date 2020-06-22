export default function CatchError() {
  return function (target: any, properKey: string, descriptor: PropertyDescriptor) {
      const fun = descriptor.value
      descriptor.value = function () {
          const result = fun.apply(this, arguments)
          return result.catch(err => {
              console.log('-----------------')
              console.log(err)
              console.log('-----------------')
              return {status: 500, message: err.message}
              
          })
      }
      
  }
}