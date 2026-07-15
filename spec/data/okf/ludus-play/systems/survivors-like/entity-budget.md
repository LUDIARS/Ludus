---
type: "Ludus Gameplay System"
title: "大量エンティティ予算"
description: "敵・弾・経験値を大量に扱いながら、入力応答と画面の読みやすさを維持する。"
tags:
  - "ludus"
  - "gameplay-system"
  - "survivors-like"
  - "split"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:survivors-like:entity-budget"
genre_id: "genre:survivors-like"
implementation_status: "split"
implementation_owner: "Ergo/Ars + Pictor"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

敵・弾・経験値を大量に扱いながら、入力応答と画面の読みやすさを維持する。

# 設計思想

技術的な節約を、遊びの気持ちよさと公平性のために行う。

# 主要機能

- 生成上限
- 更新間引き
- 描画・当たり判定の予算

# UXへの寄与

- [安定感](../../ux/b702516fa9d75b7f.md)
- [視認性](../../ux/188f1b23eb61acd7.md)

# ドメイン要素

- [アクターと役割](../../domains/actors.md)
- [入力と操作](../../domains/input-and-control.md)
- [対立と解決](../../domains/conflict-and-resolution.md)
- [ルールと状態](../../domains/rules-and-state.md)
- [コンテンツとペーシング](../../domains/content-and-pacing.md)

# 汎用実装の判定

- **状態**: split
- **所有**: Ergo/Ars + Pictor
- **判断**: ゲーム規則はErgo/Ars、再利用可能な視覚出力はPictorへ分離する候補。

# Pictor候補

- [インパクト・ポストプロセス](../../pictor/impact-and-postprocess.md)

# 実装上の前提

- [ビルド相乗と進化](./build-evolution.md) の後に実装する。
