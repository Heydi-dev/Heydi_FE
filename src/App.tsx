import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import {
  Login,
  Signup,
  Diary,
  DiaryWaiting,
  DiaryChat,
  DiaryDetail,
  Report,
  Community,
  Mypage,
  Loading,
} from "@pages/index";

const App = () => {
  return (
    <Router>
      <div
        className="
          w-[100vw]
          max-w-[425px]
          min-w-[320px]
          flex
          justify-center
          items-center
          select-none
          [@supports(-webkit-touch-callout:none)]:tap-highlight-transparent
        "
      >
        <Routes>
          {/* Init */}
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route>
            {/* Diary */}
            <Route path="/diary" element={<Diary />} />
            <Route path="/diary/wait" element={<DiaryWaiting />} />
            <Route path="/diary/chat/:sessionId" element={<DiaryChat />} />
            <Route path="/diary/detail/:diaryId" element={<DiaryDetail />} />

            {/* Report */}
            <Route path="/report" element={<Report />} />

            {/* Community */}
            <Route path="/community" element={<Community />} />

            {/* MyPage */}
            <Route path="/mypage" element={<Mypage />} />

            {/* Etc */}
            <Route path="/etc" element={<Loading />} />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
