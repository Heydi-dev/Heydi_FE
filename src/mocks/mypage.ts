// User
export interface User {
  username?: string;
  nickname: string;
  profile_url: string;
  currentPassword?: string;
}

export const USER_DUMMY: User = {
  username: "test123",
  nickname: "Test",
  profile_url: "",
  currentPassword: "test123!",
};

// Mypage
export interface Mypage {
  user: User;
  likedPosts: number;
  sharedPosts: number;
  alarm: AlarmSetting;
}

export interface AlarmSetting {
  enabled: boolean;
  ampm: "AM" | "PM";
  hour: number;
  minute: number;
}

export const MYPAGE_DUMMY: Mypage = {
  user: USER_DUMMY,
  likedPosts: 2,
  sharedPosts: 1,
  alarm: {
    enabled: true,
    ampm: "PM",
    hour: 9,
    minute: 0,
  },
};
