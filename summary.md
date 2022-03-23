# UseEffect

## Các biến thể của useEffect

Return trong useEffect là cleanup callback, nếu ko có, thì là return undefied

- ue không có dependency : luôn chạy sau khi app render
- ue có dependency arr rỗng : chạy 1 lần sau khi app rend lần đầu
- ue có n dependecies (n=1>++) : chạy 1 lần sau khi app rend lần đầu, và mỗi khi 1 trong các n dependecies có sự thay đổi

## UE để gọi api

- khi gọi api luôn dùng trong trycatch
- lý do dùng UE vì mình muốn kiểm soát số lần gọi api
  - khi nào gọi, tại sao gọi, gọi đến đâu
- cách thay đổi url phù hợp trước mỗi lần fetch
