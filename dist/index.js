"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = __importStar(require("dotenv"));
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var helmet_1 = __importDefault(require("helmet"));
dotenv.config();
if (!process.env.PORT) {
    process.exit(1);
}
var PORT = parseInt(process.env.PORT, 10);
var app = express_1.default();
app.use(helmet_1.default());
app.use(cors_1.default());
app.use(express_1.default.json());
app.listen(PORT, function () { console.log("Listening on port " + PORT); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUEsNkNBQWlDO0FBQ2pDLG9EQUE4QjtBQUM5Qiw4Q0FBd0I7QUFDeEIsa0RBQTRCO0FBRTVCLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQU1oQixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUU7SUFDbkIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUNsQjtBQUVELElBQU0sSUFBSSxHQUFXLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQWMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUU5RCxJQUFNLEdBQUcsR0FBRyxpQkFBTyxFQUFFLENBQUM7QUFNdkIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxnQkFBTSxFQUFFLENBQUMsQ0FBQztBQUNsQixHQUFHLENBQUMsR0FBRyxDQUFDLGNBQUksRUFBRSxDQUFDLENBQUM7QUFDaEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFNeEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsY0FBUSxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUFxQixJQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBSZXF1aXJlZCBFeHRlcm5hbCBNb2R1bGVzXG4gKi9cblxuaW1wb3J0ICogYXMgZG90ZW52IGZyb20gXCJkb3RlbnZcIjtcbmltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgY29ycyBmcm9tIFwiY29yc1wiO1xuaW1wb3J0IGhlbG1ldCBmcm9tIFwiaGVsbWV0XCI7XG5cbmRvdGVudi5jb25maWcoKTtcblxuLyoqXG4gKiBBcHAgVmFyaWFibGVzXG4gKi9cblxuaWYgKCFwcm9jZXNzLmVudi5QT1JUKSB7XG4gICAgcHJvY2Vzcy5leGl0KDEpO1xuIH1cbiBcbiBjb25zdCBQT1JUOiBudW1iZXIgPSBwYXJzZUludChwcm9jZXNzLmVudi5QT1JUIGFzIHN0cmluZywgMTApO1xuIFxuIGNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuIC8qKlxuICogIEFwcCBDb25maWd1cmF0aW9uXG4gKi9cblxuYXBwLnVzZShoZWxtZXQoKSk7XG5hcHAudXNlKGNvcnMoKSk7XG5hcHAudXNlKGV4cHJlc3MuanNvbigpKTtcblxuLyoqXG4gKiBTZXJ2ZXIgQWN0aXZhdGlvblxuICovXG5cbmFwcC5saXN0ZW4oUE9SVCwgKCkgPT4geyBjb25zb2xlLmxvZyhgTGlzdGVuaW5nIG9uIHBvcnQgJHtQT1JUfWApOyB9KTsiXX0=