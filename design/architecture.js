/**
 * Created by luyi-netease on 2016/4/22.
 */
'use strict';

let User, LoginUser, ChatRoom;
const architecture = {
    client:{
        model:{
            //see database
        },
        view:{
            //登录用户
            loginUser,
            //操作
            operations:[
                //创建聊天室
                chatroom,
                //退出
                exit,
                //设置
                setting,
                //搜索
                search
            ],
            chatrooms:[{
                //聊天快照
                snapshot:{
                    //用户
                    users:[],
                    //用户名|群名
                    username,
                    //最新一次消息时间
                    updateTime,
                    //最新一条消息
                    lastMessage,
                    //新消息数量
                    newMessageCount
                },
                //聊天内容
                chatContent:{
                    messages:[],
                    editBox
                }
            }]
        }
    },
    server:{
        http:{
            register,
            login,
            logout,
            chatRoom
        },
        ws:{
            userLogin,
            userLogout,
            newRoom,
            userExitRoom,
            roomDestroy,
            newMessage
        }
    },
    database:{
        user:{
            userId,
            username,
            password,
            sex,
            avatar,
            introduction,
            //状态，在线，离开，退出
            status,
            createTime,
            updateTime
        },
        userRelation:{
            fromUserId,
            toUserId,
            type
        },
        room:{
            roomId,
            userIds
        },
        message:{
            messageId,
            fromId,
            toId,
            //对方类型，user or room
            toType,
            //消息类型，文本，图片，删除消息
            type,
            content,
            status,
            createTime
        }
    },
    monitor:{

    }
}