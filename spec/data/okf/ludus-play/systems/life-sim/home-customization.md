---
type: "Ludus Gameplay System"
title: "住環境と装飾"
description: "家具、配置、外観を編集し、生活の成果を自分の空間として表現する。"
tags:
  - "ludus"
  - "gameplay-system"
  - "life-sim"
  - "game-specific"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:life-sim:home-customization"
genre_id: "genre:life-sim"
implementation_status: "game-specific"
implementation_owner: "Game project"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

家具、配置、外観を編集し、生活の成果を自分の空間として表現する。

# 設計思想

最適解だけでなく、見た目と物語性の選択を成立させる。

# 主要機能

- 配置編集
- 装飾収集
- 環境ボーナス

# UXへの寄与

- [自己表現](../../ux/acdb56909eecad60.md)
- [愛着](../../ux/1b83fac88275658c.md)

# ドメイン要素

- [メタゲームと運用](../../domains/meta-and-live-operations.md)
- [物語と知識](../../domains/narrative-and-knowledge.md)

# 汎用実装の判定

- **状態**: game-specific
- **所有**: Game project
- **判断**: 現時点ではジャンル固有の設計として保持し、横断利用の実例が増えた時点で共通化を再評価する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- [人間関係と地域イベント](./relationships-events.md) の後に実装する。
