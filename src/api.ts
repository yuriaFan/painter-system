import Service from '@/http'
import { HttpResponse } from '@/types/allUserTypes'
//封装User类型的接口方法
const token = localStorage.getItem('loginToken')
export class UserService {
  /**
   * @description 查询User的信息
   * @param {number} teamId - 所要查询的团队ID
   * @return {HttpResponse} result
   */
  static async printerClearedPlanList(): Promise<HttpResponse> {
    return Service('/printer/myPlan/cleared', {
      method: 'get',
      responseType: 'json',
      params: {
        // id: token
      },
    })
  }
  static async printerPlaningList(): Promise<HttpResponse> {
    return Service('/printer/myPlan/planing', {
      method: 'get',
      responseType: 'json',
      params: {
        // id: token
      }
    })
  }
  static async printerUnfinishPlanList(): Promise<HttpResponse> {
    return Service('/printer/myPlan/unfinished', {
      method: 'get',
      responseType: 'json',
      params: {
        // id: token
      }
    })
  }

  static async printerChangeOrderStatus(id:string,state: string): Promise<HttpResponse> {
    return Service('/printer/myPlan/changeStatus', {
      method: 'put',
      responseType: 'json',
      params: {
        state,
        id
      }
    })
  }
  static async register(
    userName, nickName, password, identify
  ): Promise<HttpResponse> {
    return Service('/usercenter/register', {
      method: 'post',
      responseType: 'json',
      data: {
        userName: userName,
        nickName: nickName,
        password: password,
        identify: identify,
      }
    })
  }
  static async login(
    identify, userName, password
  ): Promise<HttpResponse> {
    return Service('/usercenter/login', {
      method: 'post',
      responseType: 'json',
      data: {
        identify: identify,
        userName: userName,
        password: password,
      }
    })
  }
  // static async inviteList(): Promise<HttpResponse> {
  //   return Service('/printer/myInvite/lookInvite', {
  //     method: 'get',
  //     responseType: 'json',
  //   })
  // }
  static async printerAgreeInvite(orderId): Promise<HttpResponse> {
    return Service('/printer/myInvite/agree', {
      method: 'put',
      responseType: 'json',
      params: {
        orderId: orderId
        // id: token
      }
    })
  }
  static async printerRefuseInvite(orderId): Promise<HttpResponse> {
    return Service('/printer/myInvite/refuse', {
      method: 'put',
      responseType: 'json',
      params: {
        orderId: orderId
        // id: token
      }
    })
  }
  static async userContributing(): Promise<HttpResponse> {
    return Service('/user/searchPlaning', {
      method: 'get',
      responseType: 'json',
      params: {
        // id: token
      }
    })
  }

  static async userClearedList(): Promise<HttpResponse> {
    return Service('/user/cleared', {
      method: 'get',
      responseType: 'json',
      params: {
        // id: token
      }
    })
  }


  static async userUnfinishList(): Promise<HttpResponse> {
    return Service('/user/searchNoCompleted', {
      method: 'get',
      responseType: 'json',
      params: {
        // id: token
      }
    })
  }


  static async printerUntreatInviteList(): Promise<HttpResponse> {
    return Service('/printer/myInvite/lookInvite', {
      method: 'get',
      responseType: 'json',
      params: {
        // printerId: token
      }
    })
  }
  static async printerRefuseInviteList(): Promise<HttpResponse> {
    return Service('/printer/myInvite/lookRefuseInvite', {
      method: 'get',
      responseType: 'json',
      params: {
        // printerId: token
      }
    })
  }
  static async userSelectPrinter(printId, orderId): Promise<HttpResponse> {
    return Service('/user/selectPrinter', {
      method: 'put',
      responseType: 'json',
      params: {
        printId: printId,
        orderId: orderId
      }
    })
  }
  static async orderDetail(orderId): Promise<HttpResponse> {
    return Service('/order/query', {
      method: 'get',
      responseType: 'json',
      params: {
        id: orderId
      }
    })
  }
  static async addOrder(title, money, limitTime, style, content): Promise<HttpResponse> {
    return Service('/order/addOrder', {
      method: 'post',
      responseType: 'json',
      data: {
        title, money, limitTime, style, content
      }
    })
  }

  static async uploadImage(file):Promise<HttpResponse>{
    return Service('/file/upload',{
      method:'post',
      responseType:"json",
      data:file,
      params:{
        module:1
      },
    })
  }
  static async updateInfo(nickName, userName, passwordt): Promise<HttpResponse> {
    return Service('usercenter/update', {
      method: 'post',
      responseType: 'json',
      data: {
        nickName, userName, passwordt
      }
    })
  }
}
