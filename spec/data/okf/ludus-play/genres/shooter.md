---
type: "Ludus Game Genre"
title: "シューティングゲーム(FPS/TPS)"
description: "シューティングゲームは、照準の精密性と戦術的判断を核とするジャンル。銃器の挙動、弾道計算、ヒットフィードバックが体験の質を決定する。"
tags:
  - "ludus"
  - "gameplay"
  - "genre"
  - "shooter"
timestamp: "2026-07-15T00:00:00+09:00"
source_import_id: "src_0001"
source_page_id: "30453028-8e8d-8013-9f66-d505b61f3f8b"
source_graph: "graph/shooter.json"
---

# コア体験

シューティングゲームは、照準の精密性と戦術的判断を核とするジャンル。銃器の挙動、弾道計算、ヒットフィードバックが体験の質を決定する。

# 主要システム

- [照準システム(Aiming System)](../systems/shooter/s01.md)
- [リコイル/反動制御(Recoil System)](../systems/shooter/s02.md)
- [ヒットマーカー/ヒットフィードバック](../systems/shooter/s03.md)
- [武器リロードシステム](../systems/shooter/s04.md)
- [ヘルス/シールドシステム](../systems/shooter/s05.md)
- [弾道システム(Ballistics)](../systems/shooter/s06.md)
- [グレネード/投擲武器](../systems/shooter/s07.md)
- [スコープ/ADS(Aim Down Sights)](../systems/shooter/s08.md)

# 実装順序

1. 基本射撃システム: ヒットスキャンまたは発射体
2. ヒットマーカー/フィードバック: 射撃の手応えを実現
3. リロードシステム: 弾薬管理の基礎
4. ヘルス/ダメージシステム: 生存メカニクス
5. ADS/スコープ: 精密射撃モード
6. リコイル制御: 射撃のスキル要素
7. グレネード: 戦術の幅を広げる
8. 弾道システム: リアリティ向上(オプション)
